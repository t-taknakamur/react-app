export interface CategoriesProps {
  categories: SelectCategories[];
  value: string;
  onChange: (value: string) => void;
}
export interface SelectCategories {
    category_id: string;
    name: string;
}
