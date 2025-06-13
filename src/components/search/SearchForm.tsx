/*--------------------------------------*
  src/components/search/SearchForm.tsx
*---------------------------------------*/
import React, { useState } from 'react';

// SearchFormProps をファイル内に定義
interface SearchFormProps {
  onSearch: (params: { keyword?: string }) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [keyword, setKeyword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ keyword: keyword.trim() || undefined });
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={keyword}
        placeholder="キーワードを入力"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button type="submit">検索</button>
    </form>
  );
};

export default SearchForm;
