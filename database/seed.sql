-- ============================================================================
-- ONIONIQ SEED DATA
-- Sample data for SIH 2026 judging demonstration
-- ============================================================================

INSERT INTO procurement_centers (center_id, center_name, state, district, geo_lat, geo_lng) VALUES
('CTR-KOL-01', 'Kolhapur Procurement Center', 'Maharashtra', 'Kolhapur', 16.7050, 74.2433),
('CTR-LAS-02', 'Lasalgaon Mandi Hub', 'Maharashtra', 'Nashik', 20.1471, 74.2307),
('CTR-NAS-03', 'Nashik District Storage', 'Maharashtra', 'Nashik', 20.0059, 73.7898),
('CTR-PUN-04', 'Pune Agribusiness Depot', 'Maharashtra', 'Pune', 18.5204, 73.8567),
('CTR-NEE-05', 'Neemuch Mandi Complex', 'Madhya Pradesh', 'Neemuch', 24.4705, 74.8719),
('CTR-MAN-06', 'Mandsaur Farmers Co-op', 'Madhya Pradesh', 'Mandsaur', 24.0726, 75.0689);

INSERT INTO users (user_id, email, password_hash, full_name, role, center_id) VALUES
('USR-INSP-101', 'inspector@onioniq.demo', '$2b$10$e8.Z/yG7vR1P3V1K8X1...', 'Rajesh Kumar', 'INSPECTOR', 'CTR-KOL-01'),
('USR-ADM-001', 'admin@onioniq.demo', '$2b$10$e8.Z/yG7vR1P3V1K8X1...', 'Dr. Sunita Sharma', 'ADMIN', 'CTR-KOL-01');

INSERT INTO inspection_batches (batch_id, center_id, inspector_id, farmer_id, status) VALUES
('ON-2026-0088', 'CTR-KOL-01', 'USR-INSP-101', 'FARM-MH-9482', 'VERIFIED'),
('ON-2026-0087', 'CTR-LAS-02', 'USR-INSP-101', 'FARM-MH-1120', 'VERIFIED'),
('ON-2026-0086', 'CTR-NAS-03', 'USR-INSP-101', 'FARM-MH-5049', 'VERIFIED');
