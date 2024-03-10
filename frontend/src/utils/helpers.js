import axios from "axios";
import toast from "react-hot-toast";

export const BASE_URL = "http://localhost:8000/api";

export const logoutUser = () => {
    localStorage.removeItem("token");
    window.location.reload();
};

export const getAllUsers = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/users/`);
        const { users } = res.data;
        return users;
    } catch (error) {
        toast.error("Error getting the users");
    }
};

export async function getAllProducts() {
    try {
        const res = await axios.get(`${BASE_URL}/products`);
        return res.data.products;
    } catch (error) {
        toast.error("Error getting products");
    }
}

export async function deleteProduct(id) {
    try {
        const res = await axios.delete(`${BASE_URL}/products/delete/${id}`);
        return res.data;
    } catch (error) {
        toast.error("Error Deleting the Product");
    }
}
