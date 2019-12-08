import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;
export const instance = axios.create({ BASE_URL });
export const headers = () => ({ 'Content-Type': 'application/json' });

export default instance;
