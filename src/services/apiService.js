import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL
});

// ===== MÉDICOS =====
export const medicoService = {
  getAll: () => api.get('/medicos'),
  create: (data) => api.post('/medicos', data),
  update: (id, data) => api.put(`/medicos/${id}`, data),
  delete: (id) => api.delete(`/medicos/${id}`)
};

// ===== PACIENTES =====
export const pacienteService = {
  getAll: () => api.get('/pacientes'),
  create: (data) => api.post('/pacientes', data),
  update: (id, data) => api.put(`/pacientes/${id}`, data),
  delete: (id) => api.delete(`/pacientes/${id}`)
};

// ===== CONSULTAS =====
export const consultaService = {
  getAll: () => api.get('/consultas'),
  create: (data) => api.post('/consultas', data),
  update: (id, data) => api.put(`/consultas/${id}`, data),
  delete: (id) => api.delete(`/consultas/${id}`)
};