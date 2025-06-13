/// <reference types="vite/client" />
import React, { useState, useEffect } from 'react';
const useMock = import.meta.env.VITE_USE_MOCK === 'false';
import { fetchRecords as realFetch } from '../../api/recordsApi';
import { fetchRecords as mockFetch } from '../../api/recordsApi.mock';
import SearchForm from '../search/SearchForm';
import ListView from '../list/ListView';
import type { RecordItem } from '../../types';

const MainContent = () => {
  const [items, setItems] = useState<RecordItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = async (params = {}) => {
    setLoading(true);
    setError(null);
    try {
      const data = useMock
        ? await mockFetch(params as { keyword?: string })
        : await realFetch(params as { keyword?: string });
      setItems(data);
    } catch {
      setError('データの取得に失敗しました');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadData(); }, []);

  return (
    <main className="main-content">
      <SearchForm onSearch={(p) => loadData(p)} />
      {loading && <p>読み込み中...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && <ListView items={items} />}
    </main>
  );
};

export default MainContent;
