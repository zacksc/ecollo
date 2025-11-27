// src/hooks/useProfileScreen.js
import { useRequest } from './useRequest';
import { getProfileByPublicId } from '../services/profile';

export function useProfileScreen(publicId) {
  const { data, loading, error, refetch } = useRequest(
    () => getProfileByPublicId(publicId),
    [publicId],
  );

  return {
    profile: data?.profile || null,
    deposits: data?.deposits || [],
    redemptions: data?.redemptions || [],
    loading,
    error,
    refetch,
  };
}
