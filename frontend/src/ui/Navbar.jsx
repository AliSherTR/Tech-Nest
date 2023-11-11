import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export default function Navbar() {
    const authContext = useContext(AuthContext);
    const username = authContext.state?.user?.username;
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
                {username ? username : "Login"}
            </p>
        </nav>
    );
}
