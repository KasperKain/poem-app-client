import axios from 'axios';

const base = axios.create({
  baseURL: 'http://localhost:8000/poems',
});

export const getPoems = () => base.get('/');
export const getPoem = (id) => base.get(`/${id}`);
export const createPoem = (body) => base.post('/', body);
export const deletePoem = (id) => base.delete(`/${id}`);
export const updatePoem = (id, fields) => base.put(`/${id}`, fields);
