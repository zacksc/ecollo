// services/collectionPoints.js
import { api } from './api';

export async function getCollectionPoints() {
  const res = await api.get('/collection-points');
  return res.data;
}