import axios from 'axios';
const { API_ENDPOINT } = require('../config');

const base = axios.create({
  baseURL: `${API_ENDPOINT}/poems`,
});

export const getPoems = () => base.get('/');
export const getPoem = (id) => base.get(`/${id}`);
export const createPoem = (body) => base.post('/', body);
export const deletePoem = (id) => base.delete(`/${id}`);
export const updatePoem = (id, fields) => base.put(`/${id}`, fields);
