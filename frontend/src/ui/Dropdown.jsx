import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import {
    HiChevronUpDown,
    HiCog8Tooth,
    HiMiniSquares2X2,
    HiOutlineArrowLeftOnRectangle,
    HiOutlineUser,
} from "react-icons/hi2";
import { logoutUser } from "../utils/helpers";

export default function Dropdown() {
    const [IsOpen, setIsOpen] = useState(false);
    const { state } = useAuth();
    return (
        <div className="relative mx-5">
            <button
                className=" flex items-center gap-2"
                onClick={() => setIsOpen((prevState) => !prevState)}
            >
                <span>{state.user.username}</span>
                <span>
                    <HiChevronUpDown />
                </span>
            </button>
            {IsOpen && (
                <ul
                    className={`absolute inset-0 top-10 h-max p-6 w-[200%] left-[-40px] flex flex-col gap-3 rounded-md text-black bg-white shadow-md font-sans text-sm  `}
                >
                    <li className=" text-sm font-semibold ">{`Signed in as ${state.user.email}`}</li>
                    <li className=" flex items-center gap-2">
                        <HiOutlineUser />
                        <Link>Profile</Link>
                    </li>
                    {state?.user?.role === "admin" && (
                        <li className=" flex items-center gap-2">
                            <HiMiniSquares2X2 />
                            <Link to="/admin/">Admin Dashboard</Link>
                        </li>
                    )}

                    {state?.user?.role === "seller" && (
                        <li className=" flex items-center gap-2">
                            <HiMiniSquares2X2 />
                            <Link to="/seller/">Seller Dashboard</Link>
                        </li>
                    )}

                    <li className=" flex items-center gap-2">
                        <HiCog8Tooth />
                        <Link>Account Settings</Link>
                    </li>

                    <hr />
                    <li
                        className=" flex items-center gap-2"
                        onClick={() => logoutUser()}
                    >
                        <HiOutlineArrowLeftOnRectangle />
                        <Link>Logout</Link>
                    </li>
                </ul>
            )}
        </div>
    );
}
