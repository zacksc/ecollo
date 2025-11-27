// src/hooks/useRequest.js
import { useEffect, useState, useCallback } from 'react';

export function useRequest(requestFn, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const run = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await requestFn();
      setData(result);
    } catch (err) {
      console.log('useRequest error:', err?.response?.data || err?.message || err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    run();
  }, [run]);

  return { data, loading, error, refetch: run };
}
