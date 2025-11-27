// services/tips.js
import { api } from './api';

// Busca todas as dicas de separação no backend
export async function getTips() {
  const res = await api.get('/tips');
  return res.data; // deve ser um array de { id, title, description, ... }
}
