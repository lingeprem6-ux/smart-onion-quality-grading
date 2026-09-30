/**
 * ONIONIQ - Demo Preset Scenarios & Synthetic AI Detection Coordinates
 * Used for instant SIH 2026 judging presentation.
 */

export const DEMO_PRESETS = {
  preset1: {
    id: 'preset1',
    name: 'DEMO 1: Standard High-Quality Procurement Batch (Grade A 82%)',
    description: 'Typical procurement batch with high proportion of healthy onions and minimal storage defects.',
    imageUrl: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=1000&auto=format&fit=crop&q=80',
    summary: {
      totalSample: 100,
      healthy: 82,
      damaged: 7,
      rotten: 4,
      sprouted: 3,
      undersized: 4
    },
    // Coordinates normalized 0-100% for canvas rendering bounding boxes
    boxes: [
      { id: 1, type: 'HEALTHY', x: 12, y: 15, w: 14, h: 18, label: 'HEALTHY (98.4%)' },
      { id: 2, type: 'HEALTHY', x: 28, y: 12, w: 15, h: 19, label: 'HEALTHY (97.1%)' },
      { id: 3, type: 'HEALTHY', x: 45, y: 16, w: 16, h: 20, label: 'HEALTHY (99.0%)' },
      { id: 4, type: 'HEALTHY', x: 63, y: 14, w: 14, h: 18, label: 'HEALTHY (96.5%)' },
      { id: 5, type: 'HEALTHY', x: 79, y: 18, w: 13, h: 17, label: 'HEALTHY (95.8%)' },
      { id: 6, type: 'HEALTHY', x: 10, y: 36, w: 15, h: 19, label: 'HEALTHY (98.2%)' },
      { id: 7, type: 'HEALTHY', x: 27, y: 34, w: 16, h: 20, label: 'HEALTHY (94.7%)' },
      { id: 8, type: 'DAMAGED', x: 45, y: 38, w: 14, h: 18, label: 'DAMAGED (91.2%)' },
      { id: 9, type: 'HEALTHY', x: 61, y: 35, w: 15, h: 19, label: 'HEALTHY (97.6%)' },
      { id: 10, type: 'HEALTHY', x: 78, y: 38, w: 14, h: 18, label: 'HEALTHY (98.9%)' },
      { id: 11, type: 'ROTTEN',  x: 14, y: 58, w: 14, h: 18, label: 'ROTTEN (93.5%)' },
      { id: 12, type: 'HEALTHY', x: 30, y: 57, w: 15, h: 19, label: 'HEALTHY (96.0%)' },
      { id: 13, type: 'SPROUTED', x: 47, y: 60, w: 13, h: 18, label: 'SPROUTED (89.4%)' },
      { id: 14, type: 'HEALTHY', x: 63, y: 58, w: 15, h: 19, label: 'HEALTHY (97.8%)' },
      { id: 15, type: 'UNDERSIZED', x: 80, y: 61, w: 10, h: 13, label: 'UNDERSIZED (92.0%)' }
    ]
  },
  preset2: {
    id: 'preset2',
    name: 'DEMO 2: High-Defect Storage Batch (URS 52%)',
    description: 'Post-harvest high humidity affected sample with heavy sprouting, neck rot, and mechanical damage.',
    imageUrl: 'https://images.unsplash.com/photo-1587049352847-4a222e784d38?w=1000&auto=format&fit=crop&q=80',
    summary: {
      totalSample: 100,
      healthy: 48,
      damaged: 18,
      rotten: 16,
      sprouted: 10,
      undersized: 8
    },
    boxes: [
      { id: 1, type: 'HEALTHY', x: 12, y: 15, w: 14, h: 18, label: 'HEALTHY (96.2%)' },
      { id: 2, type: 'ROTTEN',  x: 28, y: 12, w: 15, h: 19, label: 'ROTTEN (94.8%)' },
      { id: 3, type: 'DAMAGED', x: 45, y: 16, w: 16, h: 20, label: 'DAMAGED (92.5%)' },
      { id: 4, type: 'SPROUTED', x: 63, y: 14, w: 14, h: 18, label: 'SPROUTED (91.0%)' },
      { id: 5, type: 'ROTTEN',  x: 79, y: 18, w: 13, h: 17, label: 'ROTTEN (95.1%)' },
      { id: 6, type: 'DAMAGED', x: 10, y: 36, w: 15, h: 19, label: 'DAMAGED (89.9%)' },
      { id: 7, type: 'HEALTHY', x: 27, y: 34, w: 16, h: 20, label: 'HEALTHY (97.3%)' },
      { id: 8, type: 'SPROUTED', x: 45, y: 38, w: 14, h: 18, label: 'SPROUTED (94.0%)' },
      { id: 9, type: 'ROTTEN',  x: 61, y: 35, w: 15, h: 19, label: 'ROTTEN (96.7%)' },
      { id: 10, type: 'UNDERSIZED', x: 78, y: 38, w: 9, h: 12, label: 'UNDERSIZED (90.2%)' },
      { id: 11, type: 'DAMAGED', x: 14, y: 58, w: 14, h: 18, label: 'DAMAGED (91.4%)' },
      { id: 12, type: 'HEALTHY', x: 30, y: 57, w: 15, h: 19, label: 'HEALTHY (95.5%)' },
      { id: 13, type: 'ROTTEN',  x: 47, y: 60, w: 14, h: 18, label: 'ROTTEN (93.8%)' },
      { id: 14, type: 'SPROUTED', x: 63, y: 58, w: 14, h: 18, label: 'SPROUTED (92.2%)' },
      { id: 15, type: 'UNDERSIZED', x: 80, y: 61, w: 9, h: 12, label: 'UNDERSIZED (93.1%)' }
    ]
  }
};
