import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getInicioCards = async () => {
  const response = await axios.get(`${API_URL}/inicio-cards-informacionais`);
  return response.data;
};;