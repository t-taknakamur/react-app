/*--------------------------------------*
  src/components/search/SearchForm.tsx
*---------------------------------------*/
import React, { useState, useEffect } from 'react';
import fetchCategory from '../../api/categoriesApi';
import SelectCategories  from '../select/SelectCategories'

// SearchFormProps をファイル内に定義
interface SearchFormProps {
  onSearch: (params: { keyword?: string, category?: string }) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [keyword, setKeyword] = useState<string>('');
  const [selectCategory, setSelectCategory] = useState<string>('');

  const [categoriesdata, setCategoriesdata] = useState<SelectCategories[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const categories = async () => {
    try {
      setLoading(true);
      setError(null);
      const resultCategories = await fetchCategory();
      setCategoriesdata(resultCategories);
    } catch (e){
      setError('カテゴリの取得に失敗しました');
      throw new Error((e instanceof Error ? e.message : String(e)));
    } finally {
      setLoading(false);
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ keyword: keyword.trim(), category: selectCategory || undefined });
  };

  useEffect(() => { categories(); }, []);

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={keyword}
        placeholder="キーワードを入力"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <SelectCategories
        categories={categoriesdata}
        value={selectCategory}
        onChange={setSelectCategory}
      />
      <button type="submit">検索</button>
    </form>
  );
};

export default SearchForm;
