/*--------------------------------------*
  src/api/recordsApi.mock.ts
---------------------------------------*/
import type { RecordItem } from '../types';

export const fetchRecords = async (
  params: { keyword?: string }
): Promise<RecordItem[]> => {
  // モック用ダミーデータ
  const dummy: RecordItem[] = [
    { id: 1, name: 'テストA', created_at: '2025-06-11' },
    { id: 2, name: 'テストB', created_at: '2025-06-10' },
  ];
  return dummy.filter(item => !params.keyword || item.name.includes(params.keyword));
};