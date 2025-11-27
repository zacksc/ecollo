// services/rewards.js
import { api } from './api';

export async function getRewards() {
  const res = await api.get('/rewards');
  return res.data;
}
