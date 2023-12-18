import axios from "axios";

const baseURL = "https://assign-api.piton.com.tr/api/rest";

const axiosInstance = axios.create({
  baseURL,
});

// tüm kitapları çekebilmek için kullandığımız api
export const fetchProductByCategoryId = async (id) => {
  const response = await axiosInstance.get(`/products/${id}`);
  return response.data.product;
};
