# Backend Setup Guide

Complete step-by-step guide to implement Supabase backend for scalable village data management.

## 📋 Prerequisites

- Node.js 19+
- npm 10+
- GitHub account (for version control)
- Supabase account (free tier available)

## 🚀 Step 1: Create Supabase Project

### 1.1 Sign Up
1. Go to [supabase.com](https://supabase.com)
2. Click "Sign Up"
3. Create account with email or GitHub

### 1.2 Create Project
1. Click "New Project"
2. Select your organization
3. Fill in:
   - **Project Name**: `constituency`
   - **Database Password**: Create strong password (save it!)
   - **Region**: Choose region closest to you (India: `ap-southeast-1`)
4. Wait for project initialization (2-3 minutes)

### 1.3 Get API Credentials
1. Go to Project Settings → API
2. Copy these values to your `.env.local`:
   - `NEXT_PUBLIC_SUPABASE_URL`: Copy "Project URL"
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Copy "anon public" key
   - `SUPABASE_SERVICE_ROLE_KEY`: Copy "service_role secret" key

```bash
# Create .env.local in project root
cat > .env.local << EOF
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGci...
NODE_ENV=development
EOF
```

## 🗄️ Step 2: Initialize Database

### 2.1 Run SQL Schema
1. In Supabase, go to SQL Editor
2. Click "New Query"
3. Copy contents of `scripts/init-database.sql`
4. Paste into editor
5. Click "Run"
6. Verify tables are created (should show ✓)

### 2.2 Verify Table Creation
Run this query in SQL Editor:
```sql
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'public'
ORDER BY table_name;
```

Expected output:
```
areas
countries
mla_constituencies
mandals
parliament_constituencies
states
village_custom_data
villages
```

## 📦 Step 3: Install Supabase Client

```bash
npm install @supabase/supabase-js
```

Verify installation:
```bash
npm list @supabase/supabase-js
# Should show: @supabase/supabase-js@2.x.x
```

## 🔌 Step 4: Create API Routes

### 4.1 Create Directory Structure
```bash
mkdir -p src/app/api/villages src/app/api/states src/app/api/areas
mkdir -p src/hooks src/lib
```

### 4.2 Copy Files from Repository
Already provided:
- `src/lib/supabase.ts` - Supabase client and types
- `src/app/api/villages/route.ts` - Get villages with filtering
- `src/app/api/villages/search/route.ts` - Search villages
- `src/hooks/useVillages.ts` - React hooks for villages

## 📥 Step 5: Import Sample Data

### 5.1 Prepare Data File
Create `scripts/import-data.ts`:

```typescript
// scripts/import-data.ts
import { supabaseAdmin } from '../src/lib/supabase';

async function importData() {
  // 1. Import India as country
  const { data: countries } = await supabaseAdmin
    .from('countries')
    .insert([{ name: 'India' }])
    .select();

  const countryId = countries?.[0]?.id;

  // 2. Import states
  const states = [
    { country_id: countryId, name: 'Telangana', population: 35193978, literacy_rate: 66.5 },
    { country_id: countryId, name: 'Maharashtra', population: 112374333, literacy_rate: 82.3 },
    // ... more states
  ];

  const { data: statesData } = await supabaseAdmin
    .from('states')
    .insert(states)
    .select();

  console.log('✓ Imported states');

  // 3. Continue with mandals, parliaments, mlas, areas, villages
  // ... (see full example below)
}

importData().catch(console.error);
```

### 5.2 Migration from Current Data
```bash
# Convert existing villagesData.ts to SQL inserts
# And import into Supabase
npm run import-data
```

Script will:
1. Create 1 country (India)
2. Create 7 states
3. Create mandals for each state
4. Create parliament constituencies
5. Create MLA constituencies
6. Create areas/towns
7. Create 1000+ villages with all data

## 🧪 Step 6: Test API Routes

### 6.1 Start Development Server
```bash
npm run dev
# Server runs on http://localhost:3000
```

### 6.2 Test Endpoints

#### Test Villages API
```bash
# Get all villages in an area
curl "http://localhost:3000/api/villages?area_id=abc123&limit=5"

# Search villages
curl "http://localhost:3000/api/villages/search?q=hyderabad&limit=10"

# Get with filters
curl "http://localhost:3000/api/villages?state_id=telangana&min_population=10000&limit=20"
```

#### Expected Response
```json
{
  "data": [
    {
      "id": "village-123",
      "name": "Sample Village",
      "type": "Village",
      "population": 45000,
      "literacy_rate": 78.5
    }
  ],
  "count": 20,
  "total": 1250
}
```

### 6.3 Browser Testing
Go to: `http://localhost:3000/dashboard/profile`
- Should still work with current UI
- Data will load from API instead of hardcoded

## 🔄 Step 7: Update Frontend Components

### 7.1 Update Profile Page

Before (using hardcoded data):
```typescript
import { hyderabadEastVillages } from '@/data/villagesData';

export default function ProfilePage() {
  const villages = hyderabadEastVillages;
  return <div>{/* render */}</div>;
}
```

After (using API):
```typescript
import { useVillages } from '@/hooks/useVillages';

export default function ProfilePage() {
  const { villages, loading } = useVillages({ areaId: selectedArea.id });
  
  if (loading) return <Spinner />;
  return <div>{/* render */}</div>;
}
```

### 7.2 Create More Hooks

Create `src/hooks/useHierarchy.ts`:
```typescript
export function useStates(countryId: string) {
  const [states, setStates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/states?country_id=${countryId}`)
      .then(r => r.json())
      .then(d => setStates(d.data))
      .finally(() => setLoading(false));
  }, [countryId]);

  return { states, loading };
}

export function useMandals(stateId: string) {
  // Similar pattern
}

// ... more hooks
```

## 🚀 Step 8: Deploy to Production

### 8.1 Prepare for Production
```bash
# Build the project
npm run build

# Test production build
npm start
```

### 8.2 Deploy to Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Fill in Vercel prompts:
- Link to GitHub repo
- Add environment variables from `.env.local`
- Deploy

## ✅ Verification Checklist

### Database
- [ ] Supabase project created
- [ ] All tables created successfully
- [ ] Indexes created
- [ ] Sample data imported

### Backend
- [ ] API routes working
- [ ] Search endpoint functional
- [ ] Filtering working
- [ ] Pagination working

### Frontend
- [ ] Components updated to use hooks
- [ ] Loading states implemented
- [ ] Error handling added
- [ ] Mobile responsive

### Testing
- [ ] API endpoints tested with curl/Postman
- [ ] Browser testing on localhost
- [ ] Load testing with 100+ villages
- [ ] Mobile device testing

### Deployment
- [ ] Production build successful
- [ ] Environment variables configured
- [ ] Deployed to production
- [ ] Production endpoints working

## 🐛 Troubleshooting

### Connection Issues
```bash
# Test Supabase connection
curl -H "Authorization: Bearer $NEXT_PUBLIC_SUPABASE_ANON_KEY" \
  "$NEXT_PUBLIC_SUPABASE_URL/rest/v1/countries?select=*" \
  -H "Accept: application/json"
```

### API Route Not Found
```bash
# Verify file structure
ls -R src/app/api/

# Check file names match route
# src/app/api/villages/route.ts → /api/villages
# src/app/api/villages/search/route.ts → /api/villages/search
```

### Data Not Importing
```bash
# Check Supabase connection in script
# Verify UUID values are correct
# Check foreign key constraints

# View errors in Supabase
# Go to Project → Logs → API Logs
```

### Slow Queries
```sql
-- Check if indexes exist
SELECT * FROM pg_indexes WHERE schemaname = 'public';

-- Check query execution time
EXPLAIN ANALYZE SELECT * FROM villages WHERE name ILIKE '%test%';
```

## 📞 Support Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

## 🎯 Next Steps

After basic setup:

1. **Optimize Queries**: Add caching, optimize indexes
2. **Add Authentication**: User accounts, custom data
3. **Real-time Updates**: WebSocket for live data
4. **Analytics**: Dashboard with aggregated statistics
5. **Scale to 1M+**: Database optimization, read replicas

---

**Estimated Time**: 2-3 hours for complete setup  
**Difficulty**: Intermediate  
**Result**: Production-ready scalable backend
