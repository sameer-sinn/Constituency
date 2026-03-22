// scripts/migrate-data.ts
// Migrate existing villagesData.ts to Supabase database
// Run with: npx ts-node scripts/migrate-data.ts

import { createClient } from '@supabase/supabase-js';

// Supabase setup
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

// This would import your existing data
// For now, we'll create a template structure
const migrationData = {
  country: { name: 'India' },
  states: [
    {
      name: 'Telangana',
      population: 35193978,
      literacy_rate: 66.5,
    },
    {
      name: 'Maharashtra',
      population: 112374333,
      literacy_rate: 82.3,
    },
    // ... add other states
  ],
  mandals: [
    // Map by state -> mandal
  ],
  parliaments: [
    // Map by mandal -> parliament
  ],
  mlas: [
    // Map by parliament -> mla
  ],
  areas: [
    // Map by mla -> area
  ],
  villages: [
    // Map by area -> villages
  ],
};

async function migrateData() {
  console.log('🚀 Starting data migration...');

  try {
    // 1. Create country
    console.log('📍 Creating country...');
    const { data: countryData, error: countryError } = await supabase
      .from('countries')
      .insert([{ name: migrationData.country.name }])
      .select()
      .single();

    if (countryError) throw countryError;
    const countryId = countryData.id;
    console.log('✓ Country created:', countryId);

    // 2. Create states
    console.log('📍 Creating states...');
    const { data: statesData, error: statesError } = await supabase
      .from('states')
      .insert(
        migrationData.states.map((state) => ({
          country_id: countryId,
          ...state,
        }))
      )
      .select();

    if (statesError) throw statesError;
    console.log(`✓ Created ${statesData?.length} states`);

    // 3. Create mandals (with state mapping)
    // ... (implement similar pattern)

    // 4. Create parliaments
    // ... (implement similar pattern)

    // 5. Create MLAs
    // ... (implement similar pattern)

    // 6. Create areas
    // ... (implement similar pattern)

    // 7. Create villages (batch insert for performance)
    console.log('📍 Creating villages (this may take a while)...');

    const batchSize = 1000;
    let createdCount = 0;

    for (let i = 0; i < migrationData.villages.length; i += batchSize) {
      const batch = migrationData.villages.slice(i, i + batchSize);

      const { error: villageError } = await supabase
        .from('villages')
        .insert(batch);

      if (villageError) throw villageError;

      createdCount += batch.length;
      console.log(`✓ Created ${createdCount}/${migrationData.villages.length} villages`);
    }

    console.log('✅ Migration completed successfully!');
    console.log(`
Total records created:
- Countries: 1
- States: ${statesData?.length}
- Mandals: (count)
- Parliament Constituencies: (count)
- MLA Constituencies: (count)
- Areas/Towns: (count)
- Villages/Mohallas: ${migrationData.villages.length}
    `);
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
}

// Run migration
migrateData();
