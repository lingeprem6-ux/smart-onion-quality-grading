/**
 * ONIONIQ - Mock Data for SIH 2026 Prototype
 * Department of Consumer Affairs (DoCA), Ministry of Consumer Affairs, Food & Public Distribution
 */

export const MOCK_USER_INSPECTOR = {
  id: 'USR-INSP-101',
  name: 'Rajesh Kumar (Inspector)',
  email: 'inspector@onioniq.demo',
  role: 'INSPECTOR',
  centerId: 'CTR-KOL-01',
  centerName: 'DoCA Procurement Center - Kolhapur',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
};

export const MOCK_USER_ADMIN = {
  id: 'USR-ADM-001',
  name: 'Dr. Sunita Sharma (Admin & Nodal Officer)',
  email: 'admin@onioniq.demo',
  role: 'ADMIN',
  centerId: 'HQ-DELHI',
  centerName: 'DoCA Central Monitoring Cell - New Delhi',
  avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80'
};

export const PROCUREMENT_CENTERS = [
  { id: 'CTR-KOL-01', name: 'Kolhapur Procurement Center', state: 'Maharashtra', region: 'Western', totalBatches: 142, avgGradeA: 81.4, avgURS: 18.6, status: 'Active', lat: 16.7050, lng: 74.2433 },
  { id: 'CTR-LAS-02', name: 'Lasalgaon Mandi Hub', state: 'Maharashtra', region: 'Western', totalBatches: 310, avgGradeA: 85.2, avgURS: 14.8, status: 'Active', lat: 20.1471, lng: 74.2307 },
  { id: 'CTR-NAS-03', name: 'Nashik District Storage', state: 'Maharashtra', region: 'Western', totalBatches: 254, avgGradeA: 78.9, avgURS: 21.1, status: 'Active', lat: 20.0059, lng: 73.7898 },
  { id: 'CTR-PUN-04', name: 'Pune Agribusiness Depot', state: 'Maharashtra', region: 'Western', totalBatches: 188, avgGradeA: 83.0, avgURS: 17.0, status: 'Active', lat: 18.5204, lng: 73.8567 },
  { id: 'CTR-NEE-05', name: 'Neemuch Mandi Complex', state: 'Madhya Pradesh', region: 'Central', totalBatches: 115, avgGradeA: 76.5, avgURS: 23.5, status: 'Active', lat: 24.4705, lng: 74.8719 },
  { id: 'CTR-MAN-06', name: 'Mandsaur Farmers Co-op', state: 'Madhya Pradesh', region: 'Central', totalBatches: 98, avgGradeA: 80.1, avgURS: 19.9, status: 'Active', lat: 24.0726, lng: 75.0689 }
];

export const INITIAL_BATCHES = [
  {
    batchId: 'ON-2026-0088',
    date: '2026-09-29 14:15',
    centerId: 'CTR-KOL-01',
    centerName: 'Kolhapur Procurement Center',
    inspectorName: 'Rajesh Kumar',
    farmerId: 'FARM-MH-9482',
    totalSample: 100,
    healthy: 82,
    damaged: 7,
    rotten: 4,
    sprouted: 3,
    undersized: 4,
    gradeAPercent: 82.0,
    ursPercent: 18.0,
    status: 'VERIFIED',
    verificationTime: '2026-09-29 14:22',
    sampleImageUrl: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=800&auto=format&fit=crop&q=80',
    demoType: 'preset1'
  },
  {
    batchId: 'ON-2026-0087',
    date: '2026-09-29 11:40',
    centerId: 'CTR-LAS-02',
    centerName: 'Lasalgaon Mandi Hub',
    inspectorName: 'Amit Patel',
    farmerId: 'FARM-MH-1120',
    totalSample: 120,
    healthy: 102,
    damaged: 8,
    rotten: 3,
    sprouted: 4,
    undersized: 3,
    gradeAPercent: 85.0,
    ursPercent: 15.0,
    status: 'VERIFIED',
    verificationTime: '2026-09-29 11:48',
    sampleImageUrl: 'https://images.unsplash.com/photo-1508747703725-719777637510?w=800&auto=format&fit=crop&q=80',
    demoType: 'preset1'
  },
  {
    batchId: 'ON-2026-0086',
    date: '2026-09-28 16:10',
    centerId: 'CTR-NAS-03',
    centerName: 'Nashik District Storage',
    inspectorName: 'Pooja Deshmukh',
    farmerId: 'FARM-MH-5049',
    totalSample: 100,
    healthy: 48,
    damaged: 18,
    rotten: 16,
    sprouted: 10,
    undersized: 8,
    gradeAPercent: 48.0,
    ursPercent: 52.0,
    status: 'VERIFIED',
    verificationTime: '2026-09-28 16:18',
    sampleImageUrl: 'https://images.unsplash.com/photo-1587049352847-4a222e784d38?w=800&auto=format&fit=crop&q=80',
    demoType: 'preset2'
  },
  {
    batchId: 'ON-2026-0085',
    date: '2026-09-28 10:05',
    centerId: 'CTR-PUN-04',
    centerName: 'Pune Agribusiness Depot',
    inspectorName: 'Vikram Singh',
    farmerId: 'FARM-MH-7731',
    totalSample: 110,
    healthy: 90,
    damaged: 9,
    rotten: 4,
    sprouted: 4,
    undersized: 3,
    gradeAPercent: 81.8,
    ursPercent: 18.2,
    status: 'VERIFIED',
    verificationTime: '2026-09-28 10:15',
    sampleImageUrl: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=800&auto=format&fit=crop&q=80',
    demoType: 'preset1'
  },
  {
    batchId: 'ON-2026-0084',
    date: '2026-09-27 15:30',
    centerId: 'CTR-NEE-05',
    centerName: 'Neemuch Mandi Complex',
    inspectorName: 'Ramesh Sharma',
    farmerId: 'FARM-MP-3301',
    totalSample: 95,
    healthy: 71,
    damaged: 11,
    rotten: 6,
    sprouted: 4,
    undersized: 3,
    gradeAPercent: 74.7,
    ursPercent: 25.3,
    status: 'VERIFIED',
    verificationTime: '2026-09-27 15:38',
    sampleImageUrl: 'https://images.unsplash.com/photo-1587049352847-4a222e784d38?w=800&auto=format&fit=crop&q=80',
    demoType: 'preset2'
  }
];

export const DEFAULT_GRADING_RULES = {
  ruleName: 'DoCA Standard Onion Procurement Specification 2026',
  minHealthyPercentageForGradeA: 80.0,
  maxRottenAllowedPercent: 5.0,
  maxDamagedAllowedPercent: 10.0,
  maxSproutedAllowedPercent: 5.0,
  maxUndersizedAllowedPercent: 8.0,
  description: 'Grade A requires minimum 80% healthy onions and strict limits on rotten (<5%), damaged (<10%), sprouted (<5%), and undersized (<8%). All remaining volume falls under URS (Un-reserved / Sub-standard).'
};

export const ADMIN_ANALYTICS_DATA = {
  totalBatchesCount: 1107,
  totalOnionsInspected: 118450,
  averageGradeAPercent: 81.2,
  averageURSPercent: 18.8,
  defectTrendsMonthly: [
    { month: 'Apr', healthy: 84.5, damaged: 6.2, rotten: 3.1, sprouted: 2.8, undersized: 3.4 },
    { month: 'May', healthy: 83.1, damaged: 6.8, rotten: 3.5, sprouted: 3.1, undersized: 3.5 },
    { month: 'Jun', healthy: 80.4, damaged: 7.5, rotten: 4.8, sprouted: 3.9, undersized: 3.4 },
    { month: 'Jul', healthy: 77.2, damaged: 8.4, rotten: 6.1, sprouted: 4.5, undersized: 3.8 },
    { month: 'Aug', healthy: 79.5, damaged: 7.9, rotten: 5.2, sprouted: 4.1, undersized: 3.3 },
    { month: 'Sep', healthy: 82.1, damaged: 6.9, rotten: 4.1, sprouted: 3.3, undersized: 3.6 }
  ],
  inspectionsOverTime: [
    { date: 'Sep 23', total: 42, gradeA: 35, urs: 7 },
    { date: 'Sep 24', total: 48, gradeA: 40, urs: 8 },
    { date: 'Sep 25', total: 55, gradeA: 44, urs: 11 },
    { date: 'Sep 26', total: 61, gradeA: 50, urs: 11 },
    { date: 'Sep 27', total: 50, gradeA: 41, urs: 9 },
    { date: 'Sep 28', total: 68, gradeA: 54, urs: 14 },
    { date: 'Sep 29', total: 74, gradeA: 61, urs: 13 }
  ]
};
