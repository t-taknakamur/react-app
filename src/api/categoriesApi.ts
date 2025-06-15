import axios from "axios"
import apiClient from "../services/categoryService"
import Categories from "../components/select/SelectCategories"

const fetchCategory = async(): Promise<Categories[]> => {
    const { data } = await apiClient.get<Categories[]>('/getCategories');
    return data;
}

export default fetchCategory;