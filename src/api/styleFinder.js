import axios from 'axios';

const base = axios.create({
  baseURL: 'http://localhost:8000/styles',
});

export const getStyles = () => base.get('/');
export const getStyle = (id) => base.get(`/${id}`);
export const createStyle = (body) => base.post('/', body);
export const deleteStyle = (id) => base.delete(`/${id}`);
export const updateStyle = (id, fields) => base.put(`/${id}`, fields);
