// src/app/api/villages/search/route.ts
// GET /api/villages/search - Full-text search villages

import { NextRequest, NextResponse } from 'next/server';
import { supabase, type ApiResponse, type Village } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;

    const query = searchParams.get('q');
    const limit = Math.min(parseInt(searchParams.get('limit') || '20'), 100);
    const offset = parseInt(searchParams.get('offset') || '0');

    if (!query || query.length < 2) {
      return NextResponse.json(
        { error: 'Query must be at least 2 characters' },
        { status: 400 }
      );
    }

    // Search using PostgreSQL full-text search
    // This requires a generated column with full-text search
    // For now, using ILIKE (case-insensitive like)
    const { data, count, error } = await supabase
      .from('villages')
      .select('*', { count: 'exact' })
      .ilike('name', `%${query}%`)
      .order('name', { ascending: true })
      .range(offset, offset + limit - 1);

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
    console.error('Error searching villages:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
