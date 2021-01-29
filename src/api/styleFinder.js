import axios from 'axios';
const { API_ENDPOINT } = require('../config');

const base = axios.create({
  baseURL: `${API_ENDPOINT}/styles`,
});

export const getStyles = () => base.get('/');
export const getStyle = (id) => base.get(`/${id}`);
export const createStyle = (body) => base.post('/', body);
export const deleteStyle = (id) => base.delete(`/${id}`);
export const updateStyle = (id, fields) => base.put(`/${id}`, fields);
