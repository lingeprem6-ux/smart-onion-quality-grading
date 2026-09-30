-- ============================================================================
-- ONIONIQ DATABASE SCHEMA
-- Ministry of Consumer Affairs, Food & Public Distribution (DoCA)
-- Department of Consumer Affairs - AI Onion Quality Assessment System
-- Target RDBMS: PostgreSQL 14+
-- ============================================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Procurement Centers
CREATE TABLE IF NOT EXISTS procurement_centers (
    center_id VARCHAR(50) PRIMARY KEY,
    center_name VARCHAR(150) NOT NULL,
    state VARCHAR(50) NOT NULL,
    district VARCHAR(50) NOT NULL,
    geo_lat DECIMAL(9,6),
    geo_lng DECIMAL(9,6),
    status VARCHAR(20) DEFAULT 'ACTIVE',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Users
CREATE TABLE IF NOT EXISTS users (
    user_id VARCHAR(50) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    role VARCHAR(20) NOT NULL CHECK (role IN ('INSPECTOR', 'ADMIN', 'NODAL_OFFICER')),
    center_id VARCHAR(50) REFERENCES procurement_centers(center_id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Inspection Batches
CREATE TABLE IF NOT EXISTS inspection_batches (
    batch_id VARCHAR(50) PRIMARY KEY,
    center_id VARCHAR(50) NOT NULL REFERENCES procurement_centers(center_id),
    inspector_id VARCHAR(50) NOT NULL REFERENCES users(user_id),
    farmer_id VARCHAR(50),
    status VARCHAR(30) DEFAULT 'DRAFT' CHECK (status IN ('DRAFT', 'ANALYZING', 'PENDING_VERIFICATION', 'VERIFIED', 'REJECTED')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. Sample Images
CREATE TABLE IF NOT EXISTS sample_images (
    image_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    batch_id VARCHAR(50) NOT NULL REFERENCES inspection_batches(batch_id) ON DELETE CASCADE,
    image_url VARCHAR(512) NOT NULL,
    resolution VARCHAR(20),
    file_size_kb INTEGER,
    uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. AI Results
CREATE TABLE IF NOT EXISTS ai_results (
    analysis_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    batch_id VARCHAR(50) NOT NULL REFERENCES inspection_batches(batch_id) ON DELETE CASCADE,
    model_name VARCHAR(50) NOT NULL DEFAULT 'OnionIQ-YOLOv8',
    model_version VARCHAR(20) NOT NULL DEFAULT 'v2.1',
    is_mock BOOLEAN DEFAULT TRUE,
    total_detected INTEGER NOT NULL DEFAULT 0,
    healthy_count INTEGER NOT NULL DEFAULT 0,
    damaged_count INTEGER NOT NULL DEFAULT 0,
    rotten_count INTEGER NOT NULL DEFAULT 0,
    sprouted_count INTEGER NOT NULL DEFAULT 0,
    undersized_count INTEGER NOT NULL DEFAULT 0,
    raw_boxes_json JSONB,
    executed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 6. Grading Results
CREATE TABLE IF NOT EXISTS grading_results (
    grading_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    batch_id VARCHAR(50) NOT NULL REFERENCES inspection_batches(batch_id) ON DELETE CASCADE,
    healthy_percent DECIMAL(5,2) NOT NULL,
    damaged_percent DECIMAL(5,2) NOT NULL,
    rotten_percent DECIMAL(5,2) NOT NULL,
    sprouted_percent DECIMAL(5,2) NOT NULL,
    undersized_percent DECIMAL(5,2) NOT NULL,
    grade_a_percent DECIMAL(5,2) NOT NULL,
    urs_percent DECIMAL(5,2) NOT NULL,
    rule_name_applied VARCHAR(100) DEFAULT 'DoCA Standard 2026',
    calculated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 7. Inspector Verifications
CREATE TABLE IF NOT EXISTS inspector_verifications (
    verification_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    batch_id VARCHAR(50) NOT NULL REFERENCES inspection_batches(batch_id) ON DELETE CASCADE,
    inspector_id VARCHAR(50) NOT NULL REFERENCES users(user_id),
    verified_healthy INTEGER NOT NULL,
    verified_damaged INTEGER NOT NULL,
    verified_rotten INTEGER NOT NULL,
    verified_sprouted INTEGER NOT NULL,
    verified_undersized INTEGER NOT NULL,
    was_modified BOOLEAN DEFAULT FALSE,
    verified_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 8. Reports
CREATE TABLE IF NOT EXISTS reports (
    report_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    batch_id VARCHAR(50) NOT NULL UNIQUE REFERENCES inspection_batches(batch_id) ON DELETE CASCADE,
    qr_code_hash VARCHAR(255) NOT NULL,
    report_url VARCHAR(512),
    generated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for high-frequency queries
CREATE INDEX idx_batches_center ON inspection_batches(center_id);
CREATE INDEX idx_batches_status ON inspection_batches(status);
CREATE INDEX idx_ai_results_batch ON ai_results(batch_id);
CREATE INDEX idx_grading_batch ON grading_results(batch_id);
