// services/profile.js
import { api } from './api';

export async function getProfileByPublicId(publicId) {
  const res = await api.get(`/profile/${publicId}`);
  return res.data; // { profile, deposits, redemptions }
}