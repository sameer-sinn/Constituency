# Scalability & Backend Migration Plan

## 🎯 Overview

Migrate from frontend-only embedded data to a scalable **Supabase (PostgreSQL) + Next.js API Routes** architecture for managing 100,000+ villages across India.

---

## 📊 Current Architecture (Frontend-Only)

```
Frontend (React)
  ↓
villagesData.ts (1000+ villages hardcoded)
  ↓
hierarchyData.ts (7-level structure)
  ↓
Components render from static data
```

**Problems:**
- ❌ Hardcoded village data (1000 villages max)
- ❌ Large bundle size (data in JS)
- ❌ No filtering/search optimization
- ❌ No real-time updates
- ❌ Can't scale to 100,000+ villages

---

## 🚀 Target Architecture (Backend-Driven)

```
Frontend (React)
  ↓
Next.js API Routes
  ↓
Supabase (PostgreSQL)
  ↓
Optimized queries, indexing, caching
  ↓
Supports 100,000+ villages with search/analytics
```

**Benefits:**
- ✅ Scalable to 100,000+ villages
- ✅ Small bundle size (data not in frontend)
- ✅ Fast search and filtering via SQL
- ✅ Real-time updates capability
- ✅ Built-in authentication
- ✅ Analytics and reporting

---

## 📈 Implementation Phases

### Phase 1: Backend Setup (Week 1)
- [ ] Create Supabase project
- [ ] Design PostgreSQL schema
- [ ] Create database tables and indexes
- [ ] Set up Next.js API routes

### Phase 2: API Development (Week 2)
- [ ] Implement CRUD endpoints
- [ ] Add search/filter endpoints
- [ ] Add pagination support
- [ ] Create analytics endpoints

### Phase 3: Frontend Migration (Week 3)
- [ ] Connect frontend to APIs
- [ ] Replace hardcoded data with API calls
- [ ] Add loading states and error handling
- [ ] Implement caching/optimization

### Phase 4: Testing & Optimization (Week 4)
- [ ] Performance testing with large datasets
- [ ] Query optimization
- [ ] Database indexing tuning
- [ ] Load testing

---

## 💾 Database Schema

### **PostgreSQL Tables**

```sql
-- Countries
CREATE TABLE countries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- States/Provinces
CREATE TABLE states (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  country_id UUID NOT NULL REFERENCES countries(id),
  name VARCHAR(255) NOT NULL,
  population BIGINT,
  literacy_rate DECIMAL(5,2),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Mandals/Administrative Regions
CREATE TABLE mandals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  state_id UUID NOT NULL REFERENCES states(id),
  name VARCHAR(255) NOT NULL,
  type VARCHAR(50), -- 'Urban', 'Rural'
  created_at TIMESTAMP DEFAULT NOW()
);

-- Parliament Constituencies (Lok Sabha)
CREATE TABLE parliament_constituencies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  mandal_id UUID NOT NULL REFERENCES mandals(id),
  name VARCHAR(255) NOT NULL,
  population BIGINT,
  literacy_rate DECIMAL(5,2),
  current_mp VARCHAR(255),
  party VARCHAR(255),
  mla_count INT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- MLA Constituencies (State Assembly)
CREATE TABLE mla_constituencies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  parliament_id UUID NOT NULL REFERENCES parliament_constituencies(id),
  name VARCHAR(255) NOT NULL,
  population BIGINT,
  literacy_rate DECIMAL(5,2),
  current_mla VARCHAR(255),
  party VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Areas/Towns/Localities
CREATE TABLE areas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  mla_id UUID NOT NULL REFERENCES mla_constituencies(id),
  name VARCHAR(255) NOT NULL,
  type VARCHAR(50), -- 'Area', 'Town'
  population BIGINT,
  infrastructure VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Villages/Mohallas (Ground Level)
CREATE TABLE villages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  area_id UUID NOT NULL REFERENCES areas(id),
  name VARCHAR(255) NOT NULL,
  type VARCHAR(50), -- 'Village', 'Mohalla'
  population BIGINT,
  literacy_rate DECIMAL(5,2),
  
  -- Demographics
  male_population BIGINT,
  female_population BIGINT,
  
  -- Social Data
  major_castes TEXT[], -- Array of caste names
  major_religions TEXT[], -- Array of religion names
  
  -- Issues
  key_issues TEXT[], -- Array of voter issues
  infrastructure_status VARCHAR(255),
  
  -- Geolocation (for heatmap)
  latitude DECIMAL(10,8),
  longitude DECIMAL(11,8),
  
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Indexes for Performance
CREATE INDEX idx_states_country ON states(country_id);
CREATE INDEX idx_mandals_state ON mandals(state_id);
CREATE INDEX idx_parliaments_mandal ON parliament_constituencies(mandal_id);
CREATE INDEX idx_mlas_parliament ON mla_constituencies(parliament_id);
CREATE INDEX idx_areas_mla ON areas(mla_id);
CREATE INDEX idx_villages_area ON villages(area_id);
CREATE INDEX idx_villages_name ON villages(name);
CREATE INDEX idx_villages_type ON villages(type);
CREATE INDEX idx_villages_population ON villages(population);
CREATE INDEX idx_villages_literacy ON villages(literacy_rate);
CREATE INDEX idx_villages_geo ON villages(latitude, longitude);
```

---

## 🔌 Next.js API Routes

### **Route Structure**

```
src/app/api/
├── countries/
│   ├── route.ts                    # GET /api/countries
│   └── [id]/route.ts               # GET /api/countries/[id]
├── states/
│   ├── route.ts                    # GET /api/states (filtered by country)
│   └── [id]/route.ts               # GET /api/states/[id]
├── mandals/
│   ├── route.ts                    # GET /api/mandals (filtered by state)
│   └── [id]/route.ts               # GET /api/mandals/[id]
├── parliaments/
│   ├── route.ts                    # GET /api/parliaments (filtered)
│   └── [id]/route.ts               # GET /api/parliaments/[id]
├── mlas/
│   ├── route.ts                    # GET /api/mlas (filtered)
│   └── [id]/route.ts               # GET /api/mlas/[id]
├── areas/
│   ├── route.ts                    # GET /api/areas (filtered)
│   └── [id]/route.ts               # GET /api/areas/[id]
├── villages/
│   ├── route.ts                    # GET /api/villages (search, filter, paginate)
│   ├── search/route.ts             # GET /api/villages/search?q=...
│   ├── [id]/route.ts               # GET /api/villages/[id]
│   └── [id]/custom-data/route.ts   # POST /api/villages/[id]/custom-data
├── analytics/
│   ├── villages/route.ts           # GET /api/analytics/villages
│   ├── states/route.ts             # GET /api/analytics/states
│   └── heatmap/route.ts            # GET /api/analytics/heatmap
└── health/route.ts                 # GET /api/health (status check)
```

### **Example API Endpoints**

#### Get All States
```bash
GET /api/states?country_id=india
```

**Response:**
```json
{
  "data": [
    {
      "id": "state-123",
      "name": "Telangana",
      "population": 35193978,
      "literacy_rate": 66.5
    }
  ],
  "count": 7,
  "total": 7
}
```

#### Search Villages
```bash
GET /api/villages/search?q=hyderabad&limit=20&offset=0
```

**Response:**
```json
{
  "data": [
    {
      "id": "village-123",
      "name": "Hyderabad Village",
      "area": "Banjara Hills",
      "mla": "Hyderabad East",
      "population": 45000,
      "literacy": 78.5,
      "type": "Mohalla"
    }
  ],
  "count": 15,
  "total": 1250,
  "pagination": {"page": 1, "limit": 20}
}
```

#### Filter Villages
```bash
GET /api/villages?state_id=telangana&mla_id=hyderabad_east&min_population=10000&max_literacy=80
```

#### Get Village Details
```bash
GET /api/villages/village-123
```

**Response:**
```json
{
  "id": "village-123",
  "name": "Sample Village",
  "type": "Village",
  "population": 45000,
  "literacy_rate": 78.5,
  "male_population": 22500,
  "female_population": 22500,
  "major_castes": ["Scheduled Caste", "OBC"],
  "major_religions": ["Hindu", "Muslim"],
  "key_issues": ["Water shortage", "Infrastructure"],
  "latitude": 17.3850,
  "longitude": 78.4867,
  "area": { /* Area object */ },
  "mla": { /* MLA object */ },
  "parliament": { /* Parliament object */ },
  "state": { /* State object */ },
  "custom_data": { /* User-added data */ }
}
```

#### Analytics - Village Stats
```bash
GET /api/analytics/villages?state_id=telangana
```

**Response:**
```json
{
  "total_villages": 1250,
  "total_population": 45000000,
  "avg_literacy": 72.5,
  "literacy_distribution": {
    "high": 300,
    "medium": 600,
    "low": 350
  },
  "by_type": {
    "village": 800,
    "mohalla": 450
  },
  "by_area": [
    {"area": "Hyderabad North", "count": 200},
    {"area": "Hyderabad South", "count": 150}
  ]
}
```

#### Heatmap Data
```bash
GET /api/analytics/heatmap?state_id=telangana
```

**Response:**
```json
{
  "data": [
    {
      "village_id": "village-123",
      "name": "Sample Village",
      "latitude": 17.3850,
      "longitude": 78.4867,
      "population": 45000,
      "intensity": 0.78,
      "metrics": {"literacy": 78.5, "development": 0.72}
    }
  ]
}
```

---

## 🔐 Environment Variables

```bash
# .env.local
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
DATABASE_URL=postgresql://user:password@host:5432/database
```

---

## 📦 Updated Dependencies

```json
{
  "dependencies": {
    "next": "16.2.1",
    "react": "19.2.4",
    "react-dom": "19.2.4",
    "@supabase/supabase-js": "^2.38.0",
    "postgres": "^3.4.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.2.1",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

---

## 🔄 Frontend Changes

### **Before (Current)**
```typescript
// villagesData.ts - hardcoded
export const hyderabadCentralVillages = [
  { id: '1', name: 'Village 1', population: 10000, ... },
  { id: '2', name: 'Village 2', population: 15000, ... },
  // ... 1000+ villages
];

// Component
function ProfileStep() {
  const villages = hyderabadCentralVillages;
  return <div>{/* render */}</div>;
}
```

### **After (New)**
```typescript
// hooks/useVillages.ts - API calls
export function useVillages(areaId: string) {
  const [villages, setVillages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/villages?area_id=${areaId}`)
      .then(r => r.json())
      .then(d => setVillages(d.data))
      .finally(() => setLoading(false));
  }, [areaId]);

  return { villages, loading };
}

// Component
function ProfileStep() {
  const { villages, loading } = useVillages(selectedArea.id);
  
  if (loading) return <Spinner />;
  return <div>{/* render villages */}</div>;
}
```

---

## 🚀 Migration Steps

### **Step 1: Supabase Setup**
```bash
# 1. Sign up at https://supabase.com
# 2. Create new project
# 3. Get credentials from project settings
# 4. Run SQL scripts to create schema (provided above)
```

### **Step 2: Next.js Setup**
```bash
# Install Supabase client
npm install @supabase/supabase-js

# Create .env.local
echo "NEXT_PUBLIC_SUPABASE_URL=..." >> .env.local
echo "NEXT_PUBLIC_SUPABASE_ANON_KEY=..." >> .env.local
```

### **Step 3: Create API Routes**
```bash
# Create route files in src/app/api/
src/app/api/countries/route.ts
src/app/api/states/route.ts
src/app/api/villages/route.ts
src/app/api/villages/search/route.ts
# ... and others
```

### **Step 4: Create Data Import Script**
```bash
# Convert existing villagesData.ts to SQL inserts
# Import 100,000+ villages into Supabase database
```

### **Step 5: Create React Hooks**
```bash
src/hooks/useCountries.ts
src/hooks/useStates.ts
src/hooks/useMandals.ts
src/hooks/useVillages.ts
src/hooks/useSearch.ts
src/hooks/useAnalytics.ts
```

### **Step 6: Update Components**
```bash
# Update dashboard pages to use hooks instead of static data
# Update profile/page.tsx
# Update heatmap/page.tsx
# Update other dashboards
```

### **Step 7: Testing & Optimization**
```bash
# Performance testing with 100,000 villages
# Query optimization and indexing
# Load testing with concurrent users
```

---

## 📊 Performance Expectations

### **Current (Embedded Data)**
- Bundle size: ~2MB (villages data)
- Search: Client-side, slow with 1000 items
- Scalability: Max ~10,000 villages

### **New (Database)**
- Bundle size: ~100KB (no village data in JS)
- Search: <100ms with proper indexing on 100,000 villages
- Scalability: 1M+ villages easily
- Pagination: Works seamlessly
- Real-time updates: Possible

### **Query Performance**
```
Get state details:           ~10ms
Get mandals for state:       ~20ms
Get parliaments for mandal:  ~30ms
Get all villages in area:    ~50ms (1000 items)
Search villages by name:     ~100ms (full-text search)
Analytics aggregation:       ~200ms (complex queries)
Heatmap data (1000 points):  ~150ms
```

---

## 🔒 Security

### **Supabase Row Level Security (RLS)**
```sql
-- Public read access for constituencies
CREATE POLICY "Public read access" ON villages
  FOR SELECT USING (true);

-- Authenticated users can add custom data
CREATE POLICY "Auth users can write custom data" ON villages
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');
```

### **API Rate Limiting**
```typescript
// src/middleware.ts
export function middleware(request: NextRequest) {
  const ip = request.ip || 'unknown';
  const limit = 100; // requests per minute
  // Track and enforce rate limits
}
```

### **Data Privacy**
```typescript
// Never expose sensitive data in APIs
// Always validate and sanitize queries
// Use parameterized queries (Supabase handles this)
// No hardcoded credentials in code
```

---

## 📈 Scalability Roadmap

| Phase | Timeline | Capacity | Features |
|-------|----------|----------|----------|
| Phase 1 | Week 1 | 100,000 villages | Basic CRUD, search |
| Phase 2 | Week 3 | 1M villages | Analytics, filtering |
| Phase 3 | Month 2 | 1M villages | Real-time updates |
| Phase 4 | Month 3 | 1M+ villages | Caching, CDN, advanced analytics |

---

## ✅ Implementation Checklist

### Database Setup
- [ ] Supabase project created
- [ ] PostgreSQL schema designed
- [ ] Tables created with proper indexes
- [ ] Sample data imported

### API Development
- [ ] All routes implemented
- [ ] Pagination added
- [ ] Search functionality working
- [ ] Filtering working
- [ ] Error handling complete
- [ ] API documentation written

### Frontend Integration
- [ ] React hooks created for all API calls
- [ ] Loading states added
- [ ] Error boundaries implemented
- [ ] Caching strategy implemented
- [ ] All pages updated to use APIs

### Testing & Optimization
- [ ] Load testing with 100K+ records
- [ ] Query optimization complete
- [ ] Database indexes tuned
- [ ] Performance benchmarks met
- [ ] Security audit passed

### Deployment
- [ ] Environment variables configured
- [ ] Build process updated
- [ ] Database migrations documented
- [ ] Rollback plan in place
- [ ] Production ready

---

## 📞 Next Steps

1. **Create Supabase account** → https://supabase.com
2. **Set up project** and get API credentials
3. **Create database schema** using provided SQL
4. **Import initial data** (can be done via CSV or script)
5. **Implement API routes** in Next.js
6. **Update frontend components** to use APIs
7. **Test and optimize** for production

---

**Estimated Total Effort**: 3-4 weeks for full implementation  
**Expected Result**: Scalable to 100,000+ villages with sub-second queries
