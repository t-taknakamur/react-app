/*--------------------------------------*
  src/api/recordsApi.ts
*---------------------------------------*/
import apiClient from '../services/categoryService';
import type { RecordItem } from '../types';


export const fetchRecords = async(params: {keyword?: string}): Promise<RecordItem[]> => {
  const {data} = await apiClient.get<RecordItem[]>('/list', {params});
  return data;
}
