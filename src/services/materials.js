// services/materials.js
import { api } from './api';

export async function getMaterials() {
  const res = await api.get('/materials');
  return res.data;
}
