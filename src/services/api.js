// services/api.js
import axios from 'axios';

// mude para true quando estiver usando a Render
const IS_PROD = false;

// backend rodando no seu PC
const LOCAL_BASE_URL = 'http://192.168.18.69:3000';

// URL da Render (quando subir o backend lá)
const PROD_BASE_URL = 'https://seu-servico.onrender.com';

const BASE_URL = IS_PROD ? PROD_BASE_URL : LOCAL_BASE_URL;

export const api = axios.create({
  baseURL: BASE_URL,
});
