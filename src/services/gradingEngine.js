/**
 * ONIONIQ - Standardized Grading Calculation Engine
 * Department of Consumer Affairs (DoCA) Grading Rules Evaluator
 * 
 * Rules:
 *   - Grade A: Onions that meet healthy threshold (e.g. >= 80%) AND do not exceed defect tolerances.
 *   - URS (Un-reserved / Sub-standard): Remaining onions that fail Grade A specifications.
 */

import { DEFAULT_GRADING_RULES } from '../data/mockData.js';

export class GradingEngine {
  /**
   * Calculates Grade A % and URS % for a set of onion defect counts.
   * @param {Object} counts - { healthy, damaged, rotten, sprouted, undersized, totalSample }
   * @param {Object} rules - Active grading rules configuration
   * @returns {Object} Calculated grading results and audit breakdown
   */
  static evaluateGrading(counts, rules = DEFAULT_GRADING_RULES) {
    const total = counts.totalSample || (counts.healthy + counts.damaged + counts.rotten + counts.sprouted + counts.undersized) || 100;
    
    const healthyPct = parseFloat(((counts.healthy / total) * 100).toFixed(1));
    const damagedPct = parseFloat(((counts.damaged / total) * 100).toFixed(1));
    const rottenPct = parseFloat(((counts.rotten / total) * 100).toFixed(1));
    const sproutedPct = parseFloat(((counts.sprouted / total) * 100).toFixed(1));
    const undersizedPct = parseFloat(((counts.undersized / total) * 100).toFixed(1));

    // Check compliance with limits
    const passesHealthyLimit = healthyPct >= (rules.minHealthyPercentageForGradeA || 80.0);
    const passesRottenLimit = rottenPct <= (rules.maxRottenAllowedPercent || 5.0);
    const passesDamagedLimit = damagedPct <= (rules.maxDamagedAllowedPercent || 10.0);
    const passesSproutedLimit = sproutedPct <= (rules.maxSproutedAllowedPercent || 5.0);
    const passesUndersizedLimit = undersizedPct <= (rules.maxUndersizedAllowedPercent || 8.0);

    const isFullyCompliantGradeA = passesHealthyLimit && passesRottenLimit && passesDamagedLimit && passesSproutedLimit && passesUndersizedLimit;

    // Calculate Grade A portion and URS portion
    let gradeAPercent = 0.0;
    let ursPercent = 0.0;

    if (isFullyCompliantGradeA) {
      // Direct proportion of healthy onions qualifies for Grade A
      gradeAPercent = healthyPct;
      ursPercent = parseFloat((100.0 - gradeAPercent).toFixed(1));
    } else {
      // Penalty calculation if batch breaches critical defect tolerance thresholds
      // Grade A is capped by the healthy percentage minus defect excess penalties
      let penalty = 0;
      if (rottenPct > rules.maxRottenAllowedPercent) penalty += (rottenPct - rules.maxRottenAllowedPercent) * 2;
      if (sproutedPct > rules.maxSproutedAllowedPercent) penalty += (sproutedPct - rules.maxSproutedAllowedPercent) * 1.5;
      
      gradeAPercent = Math.max(0, parseFloat((healthyPct - penalty).toFixed(1)));
      ursPercent = parseFloat((100.0 - gradeAPercent).toFixed(1));
    }

    return {
      gradeAPercent,
      ursPercent,
      isFullyCompliantGradeA,
      ruleNameApplied: rules.ruleName || 'DoCA Standard Onion Specification 2026',
      rulesApplied: rules,
      percentages: {
        healthy: healthyPct,
        damaged: damagedPct,
        rotten: rottenPct,
        sprouted: sproutedPct,
        undersized: undersizedPct
      },
      auditChecks: {
        passesHealthyLimit,
        passesRottenLimit,
        passesDamagedLimit,
        passesSproutedLimit,
        passesUndersizedLimit
      },
      explanation: isFullyCompliantGradeA 
        ? `Batch satisfies all DoCA Grade A quality limits (Healthy >= ${rules.minHealthyPercentageForGradeA}%, Rotten <= ${rules.maxRottenAllowedPercent}%).`
        : `Batch exceeds defect tolerance limits (Rotten: ${rottenPct}% vs max ${rules.maxRottenAllowedPercent}%). ${ursPercent}% diverted to URS (Un-reserved / Sub-standard).`
    };
  }
}
