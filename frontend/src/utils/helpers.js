import axios from "axios";
import toast from "react-hot-toast";

export const getAllUsers = async () => {
    try {
        const res = await axios.get("http://localhost:8000/api/users/");
        const { users } = res.data;
        return users;
    } catch (error) {
        toast.error("An Error Occured", error.message);
    }
};
