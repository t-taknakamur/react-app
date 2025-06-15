import type { CategoriesProps, SelectCategories } from './SelectCategories.types'

const SelectCategories: React.FC<CategoriesProps> = ({ categories, value, onChange }) => (
    <select value={value} onChange={e => onChange(e.target.value)}>
    <option value="">全て</option>
    {categories.map(c => (
      <option key={c.category_id} value={c.category_id}>{c.name}</option>
    ))}
  </select>
);

export default SelectCategories;
