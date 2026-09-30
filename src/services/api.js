/**
 * ONIONIQ - API & State Management Layer
 * Emulates REST API endpoints with LocalStorage fallback for seamless offline-first prototype interactivity.
 */

import { INITIAL_BATCHES, MOCK_USER_INSPECTOR, MOCK_USER_ADMIN, PROCUREMENT_CENTERS, DEFAULT_GRADING_RULES } from '../data/mockData.js';
import { GradingEngine } from './gradingEngine.js';

const STORAGE_KEYS = {
  BATCHES: 'onioniq_batches_v1',
  CURRENT_USER: 'onioniq_user_v1',
  GRADING_RULES: 'onioniq_grading_rules_v1'
};

export class ApiService {
  static initStorage() {
    if (!localStorage.getItem(STORAGE_KEYS.BATCHES)) {
      localStorage.setItem(STORAGE_KEYS.BATCHES, JSON.stringify(INITIAL_BATCHES));
    }
    if (!localStorage.getItem(STORAGE_KEYS.CURRENT_USER)) {
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(MOCK_USER_INSPECTOR));
    }
    if (!localStorage.getItem(STORAGE_KEYS.GRADING_RULES)) {
      localStorage.setItem(STORAGE_KEYS.GRADING_RULES, JSON.stringify(DEFAULT_GRADING_RULES));
    }
  }

  // Auth Endpoints
  static async login(email, password, roleHint = 'INSPECTOR') {
    this.initStorage();
    let user = MOCK_USER_INSPECTOR;
    if (roleHint === 'ADMIN' || email.includes('admin')) {
      user = MOCK_USER_ADMIN;
    }
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
    return { status: 200, data: { user, token: 'demo-jwt-token-' + Date.now() } };
  }

  static getCurrentUser() {
    this.initStorage();
    const stored = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
    return stored ? JSON.parse(stored) : MOCK_USER_INSPECTOR;
  }

  static logout() {
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
  }

  // Batches & Inspections
  static getBatches() {
    this.initStorage();
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.BATCHES) || '[]');
  }

  static getBatchById(batchId) {
    const batches = this.getBatches();
    return batches.find(b => b.batchId === batchId) || null;
  }

  static saveBatch(batchData) {
    this.initStorage();
    const batches = this.getBatches();
    const existingIndex = batches.findIndex(b => b.batchId === batchData.batchId);
    
    if (existingIndex >= 0) {
      batches[existingIndex] = { ...batches[existingIndex], ...batchData };
    } else {
      batches.unshift(batchData);
    }

    localStorage.setItem(STORAGE_KEYS.BATCHES, JSON.stringify(batches));
    return batchData;
  }

  static createNewBatch({ centerId, centerName, inspectorName, farmerId }) {
    const newId = 'ON-2026-' + String(Math.floor(1000 + Math.random() * 9000));
    const now = new Date();
    const dateStr = now.toISOString().replace('T', ' ').substring(0, 16);

    const batch = {
      batchId: newId,
      date: dateStr,
      centerId: centerId || 'CTR-KOL-01',
      centerName: centerName || 'Kolhapur Procurement Center',
      inspectorName: inspectorName || 'Rajesh Kumar',
      farmerId: farmerId || 'FARM-MH-' + Math.floor(1000 + Math.random() * 9000),
      totalSample: 0,
      healthy: 0,
      damaged: 0,
      rotten: 0,
      sprouted: 0,
      undersized: 0,
      gradeAPercent: 0,
      ursPercent: 0,
      status: 'DRAFT',
      verificationTime: null
    };

    return this.saveBatch(batch);
  }

  static verifyAndSaveInspection(batchId, counts, isModified = false) {
    const batch = this.getBatchById(batchId);
    if (!batch) throw new Error('Batch not found: ' + batchId);

    const rules = this.getGradingRules();
    const grading = GradingEngine.evaluateGrading(counts, rules);

    const updatedBatch = {
      ...batch,
      totalSample: counts.totalSample || (counts.healthy + counts.damaged + counts.rotten + counts.sprouted + counts.undersized),
      healthy: counts.healthy,
      damaged: counts.damaged,
      rotten: counts.rotten,
      sprouted: counts.sprouted,
      undersized: counts.undersized,
      gradeAPercent: grading.gradeAPercent,
      ursPercent: grading.ursPercent,
      status: 'VERIFIED',
      isModifiedByInspector: isModified,
      verificationTime: new Date().toISOString().replace('T', ' ').substring(0, 16)
    };

    return this.saveBatch(updatedBatch);
  }

  // Grading Rules Configuration
  static getGradingRules() {
    this.initStorage();
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.GRADING_RULES) || JSON.stringify(DEFAULT_GRADING_RULES));
  }

  static updateGradingRules(newRules) {
    this.initStorage();
    localStorage.setItem(STORAGE_KEYS.GRADING_RULES, JSON.stringify(newRules));
    return newRules;
  }

  // Procurement Centers
  static getProcurementCenters() {
    return PROCUREMENT_CENTERS;
  }
}
