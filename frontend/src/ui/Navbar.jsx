import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const authContext = useAuth();

    const username = authContext.state?.user?.username;
    const navigate = useNavigate();
    function handleLogout() {
        localStorage.removeItem("token");
        navigate("/welcome");
    }
    return (
        <nav className=" max-w-[1200px] m-auto flex items-center h-12 gap-5 text-xl">
            <div className="font-bold">Tech Nest</div>
            <ul className="flex items-center gap-5 mx-auto">
                <li className="">Home</li>
                <li className="">About</li>
                <li className="">Products</li>
                <li className="">Contact</li>
            </ul>
            <p className="text-xl font-semibold">
                {username ? (
                    <>
                        <span className="mx-4">{username}</span>
                        <button onClick={handleLogout} className=" font-thin">
                            Logout
                        </button>
                    </>
                ) : (
                    "Login"
                )}
            </p>
        </nav>
    );
}
