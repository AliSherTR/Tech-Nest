import axios from "axios";
import toast from "react-hot-toast";

export const BASE_URL = "http://localhost:8000/api";

const TOKEN = localStorage.getItem("token");

export const logoutUser = () => {
    localStorage.removeItem("token");
    window.location.reload();
};

export const getAllUsers = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/users/`, {
            headers: {
                Authorization: `Bearer ${TOKEN}`,
            },
        });
        if (res.statusText == "OK") {
            const { users } = res.data;
            return users;
        }
    } catch (error) {
        toast.error("Cannot get the users. Try logging in again");
    }
};

export async function getAllProducts() {
    try {
        const res = await axios.get(`http://localhost:8000/api/products`);
        return res.data.data;
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
