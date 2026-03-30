import axios from 'axios';

const API = "http://localhost:5000/applications";

export const getAll = () => axios.get(API);
export const create = (data) => axios.post(API, data);
export const update = (id, data) => axios.put(`${API}/${id}`, data);
export const remove = (id) => axios.delete(`${API}/${id}`);