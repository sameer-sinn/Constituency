// src/hooks/useVillages.ts
// Hook for fetching villages with filtering

import { useState, useEffect, useCallback } from 'react';
import { type Village, type ApiResponse } from '@/lib/supabase';

interface UseVillagesOptions {
  areaId?: string;
  mlaId?: string;
  stateId?: string;
  limit?: number;
  offset?: number;
  minPopulation?: number;
  maxLiteracy?: number;
  type?: 'Village' | 'Mohalla';
}

interface UseVillagesReturn {
  villages: Village[];
  loading: boolean;
  error: string | null;
  total: number;
  count: number;
  refetch: () => Promise<void>;
}

export function useVillages(options: UseVillagesOptions = {}): UseVillagesReturn {
  const [villages, setVillages] = useState<Village[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);

  const {
    areaId,
    mlaId,
    stateId,
    limit = 20,
    offset = 0,
    minPopulation,
    maxLiteracy,
    type,
  } = options;

  const fetchVillages = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const params = new URLSearchParams();

      if (areaId) params.append('area_id', areaId);
      if (mlaId) params.append('mla_id', mlaId);
      if (stateId) params.append('state_id', stateId);
      if (limit) params.append('limit', limit.toString());
      if (offset) params.append('offset', offset.toString());
      if (minPopulation) params.append('min_population', minPopulation.toString());
      if (maxLiteracy) params.append('max_literacy', maxLiteracy.toString());
      if (type) params.append('type', type);

      const response = await fetch(`/api/villages?${params.toString()}`);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const result: ApiResponse<Village> = await response.json();

      setVillages(result.data);
      setTotal(result.total);
      setCount(result.count);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, [areaId, mlaId, stateId, limit, offset, minPopulation, maxLiteracy, type]);

  useEffect(() => {
    // Only fetch if we have at least one filter or it's a standalone call
    if (areaId || mlaId || stateId) {
      fetchVillages();
    }
  }, [areaId, mlaId, stateId, limit, offset, minPopulation, maxLiteracy, type, fetchVillages]);

  return {
    villages,
    loading,
    error,
    total,
    count,
    refetch: fetchVillages,
  };
}

// Hook for searching villages
export function useVillageSearch(query: string, limit: number = 20) {
  const [results, setResults] = useState<Village[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    const searchVillages = async () => {
      try {
        setLoading(true);
        setError(null);

        const params = new URLSearchParams();
        params.append('q', query);
        params.append('limit', limit.toString());

        const response = await fetch(`/api/villages/search?${params.toString()}`);

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const result: ApiResponse<Village> = await response.json();

        setResults(result.data);
        setTotal(result.total);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    // Debounce search
    const timer = setTimeout(searchVillages, 300);

    return () => clearTimeout(timer);
  }, [query, limit]);

  return { results, loading, error, total };
}
