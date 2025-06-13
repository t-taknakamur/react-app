/*--------------------------------------*
  src/api/recordsApi.ts
*---------------------------------------*/
import axios from 'axios';
import type { RecordItem } from '../types';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {"Content-Type": 'application/json'},
  timeout: 10000,
})

export const fetchRecords = async(params: {keyword?: string}): Promise<RecordItem[]> => {
  const {data} = await api.get<RecordItem[]>('/list', {params});
  return data;
}

export default fetchRecords;