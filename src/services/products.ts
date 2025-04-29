import api from "./api";

export const fetchProducts = async () => {
    try {
        const response = await api.get("/products");
        console.log("API Response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};