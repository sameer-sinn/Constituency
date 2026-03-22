// src/app/api/villages/route.ts
// GET /api/villages - Get villages with filtering and pagination

import { NextRequest, NextResponse } from 'next/server';
import { supabase, type ApiResponse, type Village } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;

    // Query parameters
    const areaId = searchParams.get('area_id');
    const mlaId = searchParams.get('mla_id');
    const stateId = searchParams.get('state_id');
    const limit = Math.min(parseInt(searchParams.get('limit') || '20'), 100); // Max 100
    const offset = parseInt(searchParams.get('offset') || '0');
    const minPopulation = searchParams.get('min_population');
    const maxLiteracy = searchParams.get('max_literacy');
    const type = searchParams.get('type'); // 'Village' or 'Mohalla'

    // Build query
    let query = supabase
      .from('villages')
      .select('*', { count: 'exact' });

    // Apply filters in order of specificity
    if (areaId) {
      query = query.eq('area_id', areaId);
    } else if (mlaId) {
      query = query
        .in(
          'area_id',
          (
            await supabase
              .from('areas')
              .select('id')
              .eq('mla_id', mlaId)
          ).data?.map((a: any) => a.id) || []
        );
    } else if (stateId) {
      // More complex: need to join through hierarchy
      query = query
        .in(
          'area_id',
          (
            await supabase
              .from('areas')
              .select('id')
              .in(
                'mla_id',
                (
                  await supabase
                    .from('mla_constituencies')
                    .select('id')
                    .in(
                      'parliament_id',
                      (
                        await supabase
                          .from('parliament_constituencies')
                          .select('id')
                          .in(
                            'mandal_id',
                            (
                              await supabase
                                .from('mandals')
                                .select('id')
                                .eq('state_id', stateId)
                            ).data?.map((m: any) => m.id) || []
                          )
                      ).data?.map((p: any) => p.id) || []
                    )
                ).data?.map((m: any) => m.id) || []
              )
          ).data?.map((a: any) => a.id) || []
        );
    }

    // Apply additional filters
    if (minPopulation) {
      query = query.gte('population', parseInt(minPopulation));
    }

    if (maxLiteracy) {
      query = query.lte('literacy_rate', parseFloat(maxLiteracy));
    }

    if (type) {
      query = query.eq('type', type);
    }

    // Apply pagination
    query = query
      .order('name', { ascending: true })
      .range(offset, offset + limit - 1);

    const { data, count, error } = await query;

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    const response: ApiResponse<Village> = {
      data: data || [],
      count: data?.length || 0,
      total: count || 0,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error fetching villages:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
