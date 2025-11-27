// hooks/useGuideScreen.js
import { useRequest } from './useRequest';
import { getTips } from '../services/tips';

export function useGuideScreen() {
  const { data, loading, error, refetch } = useRequest(() => getTips(), []);

  return {
    tips: data || [],
    loading,
    error,
    refetch,
  };
}
