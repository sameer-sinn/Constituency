-- scripts/init-database.sql
-- Initialize Supabase PostgreSQL database with required schema
-- Run this in Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Countries Table
CREATE TABLE IF NOT EXISTS countries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- States Table
CREATE TABLE IF NOT EXISTS states (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  country_id UUID NOT NULL REFERENCES countries(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  population BIGINT,
  literacy_rate DECIMAL(5,2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(country_id, name)
);

-- Mandals Table (Administrative Regions)
CREATE TABLE IF NOT EXISTS mandals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  state_id UUID NOT NULL REFERENCES states(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(50), -- 'Urban', 'Rural'
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(state_id, name)
);

-- Parliament Constituencies Table (Lok Sabha)
CREATE TABLE IF NOT EXISTS parliament_constituencies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  mandal_id UUID NOT NULL REFERENCES mandals(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  population BIGINT,
  literacy_rate DECIMAL(5,2),
  current_mp VARCHAR(255),
  party VARCHAR(255),
  mla_count INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(mandal_id, name)
);

-- MLA Constituencies Table (State Assembly)
CREATE TABLE IF NOT EXISTS mla_constituencies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  parliament_id UUID NOT NULL REFERENCES parliament_constituencies(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  population BIGINT,
  literacy_rate DECIMAL(5,2),
  current_mla VARCHAR(255),
  party VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(parliament_id, name)
);

-- Areas/Towns Table (Localities)
CREATE TABLE IF NOT EXISTS areas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  mla_id UUID NOT NULL REFERENCES mla_constituencies(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(50), -- 'Area', 'Town'
  population BIGINT,
  infrastructure VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(mla_id, name)
);

-- Villages/Mohallas Table (Ground Level)
CREATE TABLE IF NOT EXISTS villages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  area_id UUID NOT NULL REFERENCES areas(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(50), -- 'Village', 'Mohalla'
  population BIGINT,
  literacy_rate DECIMAL(5,2),
  
  -- Demographics
  male_population BIGINT,
  female_population BIGINT,
  
  -- Social Data (stored as PostgreSQL arrays)
  major_castes TEXT[],
  major_religions TEXT[],
  
  -- Issues
  key_issues TEXT[],
  infrastructure_status VARCHAR(255),
  
  -- Geolocation (for heatmap visualization)
  latitude DECIMAL(10,8),
  longitude DECIMAL(11,8),
  
  -- Metadata
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  UNIQUE(area_id, name)
);

-- Custom Data Table (User-added data per village)
CREATE TABLE IF NOT EXISTS village_custom_data (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  village_id UUID NOT NULL REFERENCES villages(id) ON DELETE CASCADE,
  user_id UUID,
  party_history TEXT,
  voter_support DECIMAL(5,2),
  infrastructure_notes TEXT,
  additional_data JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Indexes for Performance

-- Foreign key indexes (auto-created by PostgreSQL)
-- But explicitly create for clarity
CREATE INDEX idx_states_country ON states(country_id);
CREATE INDEX idx_mandals_state ON mandals(state_id);
CREATE INDEX idx_parliaments_mandal ON parliament_constituencies(mandal_id);
CREATE INDEX idx_mlas_parliament ON mla_constituencies(parliament_id);
CREATE INDEX idx_areas_mla ON areas(mla_id);
CREATE INDEX idx_villages_area ON villages(area_id);
CREATE INDEX idx_custom_data_village ON village_custom_data(village_id);

-- Search and filtering indexes
CREATE INDEX idx_villages_name ON villages(name);
CREATE INDEX idx_villages_type ON villages(type);
CREATE INDEX idx_villages_population ON villages(population);
CREATE INDEX idx_villages_literacy ON villages(literacy_rate);

-- State hierarchy navigation indexes
CREATE INDEX idx_states_name ON states(name);
CREATE INDEX idx_mandals_name ON mandals(name);
CREATE INDEX idx_parliaments_name ON parliament_constituencies(name);
CREATE INDEX idx_mlas_name ON mla_constituencies(name);
CREATE INDEX idx_areas_name ON areas(name);

-- Geolocation index (for heatmap queries)
CREATE INDEX idx_villages_geo ON villages(latitude, longitude);

-- Full-text search index (optional, requires gin or gist)
-- Uncomment if using PostgreSQL full-text search
-- CREATE INDEX idx_villages_name_fts ON villages USING gin(to_tsvector('english', name));

-- Enable full-text search on village names (optional)
ALTER TABLE villages ADD COLUMN search_vector tsvector GENERATED ALWAYS AS (to_tsvector('english', name || ' ' || COALESCE(type, ''))) STORED;
CREATE INDEX idx_villages_search ON villages USING gin(search_vector);

-- Row Level Security (RLS) Policies

-- Enable RLS
ALTER TABLE countries ENABLE ROW LEVEL SECURITY;
ALTER TABLE states ENABLE ROW LEVEL SECURITY;
ALTER TABLE mandals ENABLE ROW LEVEL SECURITY;
ALTER TABLE parliament_constituencies ENABLE ROW LEVEL SECURITY;
ALTER TABLE mla_constituencies ENABLE ROW LEVEL SECURITY;
ALTER TABLE areas ENABLE ROW LEVEL SECURITY;
ALTER TABLE villages ENABLE ROW LEVEL SECURITY;
ALTER TABLE village_custom_data ENABLE ROW LEVEL SECURITY;

-- Public read access for all constituency data
CREATE POLICY "Public read access - countries" ON countries FOR SELECT USING (true);
CREATE POLICY "Public read access - states" ON states FOR SELECT USING (true);
CREATE POLICY "Public read access - mandals" ON mandals FOR SELECT USING (true);
CREATE POLICY "Public read access - parliaments" ON parliament_constituencies FOR SELECT USING (true);
CREATE POLICY "Public read access - mlas" ON mla_constituencies FOR SELECT USING (true);
CREATE POLICY "Public read access - areas" ON areas FOR SELECT USING (true);
CREATE POLICY "Public read access - villages" ON villages FOR SELECT USING (true);

-- Authenticated users can read custom data
CREATE POLICY "Auth read custom data" ON village_custom_data 
  FOR SELECT USING (auth.role() = 'authenticated');

-- Authenticated users can insert custom data
CREATE POLICY "Auth insert custom data" ON village_custom_data 
  FOR INSERT WITH CHECK (auth.role() = 'authenticated' AND user_id = auth.uid());

-- Users can only update their own custom data
CREATE POLICY "Auth update own custom data" ON village_custom_data 
  FOR UPDATE USING (auth.role() = 'authenticated' AND user_id = auth.uid());

-- Trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER villages_updated_at BEFORE UPDATE ON villages
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER custom_data_updated_at BEFORE UPDATE ON village_custom_data
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Create initial data (India as country)
INSERT INTO countries (name) VALUES ('India') ON CONFLICT DO NOTHING;

-- Get the India country ID
-- This data will be imported from the migration script

COMMIT;
