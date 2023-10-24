import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/authentication/signin");
        toast.success("Logged Out Successfully");
    };
    return <button onClick={handleLogout}>Logut</button>;
}
