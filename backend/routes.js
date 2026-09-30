/**
 * ONIONIQ - Express API Routes Specification
 */

const express = require('express');
const router = express.Router();

// Mock in-memory database for reference Express server
let batches = [
  {
    batchId: 'ON-2026-0088',
    date: '2026-09-29 14:15',
    centerId: 'CTR-KOL-01',
    centerName: 'Kolhapur Procurement Center',
    inspectorName: 'Rajesh Kumar',
    totalSample: 100,
    healthy: 82,
    damaged: 7,
    rotten: 4,
    sprouted: 3,
    undersized: 4,
    gradeAPercent: 82.0,
    ursPercent: 18.0,
    status: 'VERIFIED'
  }
];

// Auth Endpoints
router.post('/auth/login', (req, res) => {
  const { email, role } = req.body;
  res.json({
    success: true,
    user: {
      id: role === 'ADMIN' ? 'USR-ADM-001' : 'USR-INSP-101',
      name: role === 'ADMIN' ? 'Dr. Sunita Sharma' : 'Rajesh Kumar',
      email: email || 'inspector@onioniq.demo',
      role: role || 'INSPECTOR'
    },
    token: 'jwt-sih2026-demo-token'
  });
});

// Inspections List
router.get('/inspections', (req, res) => {
  res.json({ success: true, count: batches.length, data: batches });
});

// Single Inspection
router.get('/inspections/:id', (req, res) => {
  const batch = batches.find(b => b.batchId === req.params.id);
  if (!batch) return res.status(404).json({ success: false, error: 'Batch not found' });
  res.json({ success: true, data: batch });
});

// Create Batch
router.post('/inspections', (req, res) => {
  const newBatch = {
    batchId: 'ON-2026-' + Math.floor(1000 + Math.random() * 9000),
    date: new Date().toISOString(),
    status: 'DRAFT',
    ...req.body
  };
  batches.unshift(newBatch);
  res.status(201).json({ success: true, data: newBatch });
});

// Run AI Analysis
router.post('/inspections/:id/analyze', (req, res) => {
  const { demoPreset } = req.body;
  res.json({
    success: true,
    batchId: req.params.id,
    serviceType: 'Prototype Mock AI Pipeline',
    notice: 'PROTOTYPE AI ANALYSIS — Mock model results for SIH 2026 demonstration.',
    results: {
      totalSample: 100,
      healthy: demoPreset === 'preset2' ? 48 : 82,
      damaged: demoPreset === 'preset2' ? 18 : 7,
      rotten: demoPreset === 'preset2' ? 16 : 4,
      sprouted: demoPreset === 'preset2' ? 10 : 3,
      undersized: demoPreset === 'preset2' ? 8 : 4
    }
  });
});

// Verify Inspection
router.post('/inspections/:id/verify', (req, res) => {
  const { counts, isModified } = req.body;
  const batchIndex = batches.findIndex(b => b.batchId === req.params.id);
  if (batchIndex >= 0) {
    batches[batchIndex] = {
      ...batches[batchIndex],
      ...counts,
      status: 'VERIFIED',
      isModifiedByInspector: isModified,
      verificationTime: new Date().toISOString()
    };
    return res.json({ success: true, data: batches[batchIndex] });
  }
  res.status(404).json({ success: false, error: 'Batch not found' });
});

// Admin Dashboard Analytics
router.get('/dashboard/analytics', (req, res) => {
  res.json({
    success: true,
    data: {
      totalBatches: 1107,
      totalOnionsInspected: 118450,
      avgGradeA: 81.2,
      avgURS: 18.8
    }
  });
});

module.exports = router;
