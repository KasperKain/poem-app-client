import axios from 'axios';
const { API_ENDPOINT } = require('../config');

const base = axios.create({
  baseURL: `${API_ENDPOINT}/users/register`,
});

export const getUser = (id) => {
  base.get(`/${id}`);
};
export const createUser = (body) => base.post('/', body);
