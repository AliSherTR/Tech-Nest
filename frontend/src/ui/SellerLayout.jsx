import { Link, Outlet } from "react-router-dom";
import AdminNavLink from "./AdminNavLink";
import { useState } from "react";
import { useAuth } from "../context/authContext.jsx";
import {
    HiBars3CenterLeft,
    HiMagnifyingGlass,
    HiMiniShoppingCart,
    HiMiniSquares2X2,
    HiOutlineArrowLeftOnRectangle,
} from "react-icons/hi2";
import { logoutUser } from "../utils/helpers.js";

export default function SellerLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const { state } = useAuth();
    const { username } = state.user;
    return (
        <div className="grid grid-cols-12 grid-rows-12 h-screen">
            <nav
                className={`col-span-12 ${
                    sidebarOpen ? "col-start-3" : "col-start-2"
                }  auto-rows-min grid-rows-8 text-black flex items-center px-4 ease-in-out`}
            >
                <div className="flex items-center basis-1/4 gap-4">
                    <button onClick={() => setSidebarOpen(!sidebarOpen)}>
                        <HiBars3CenterLeft color="black" size="22" />
                    </button>
                    <div className="relative flex-1">
                        <input
                            type="text"
                            className=" px-8 py-1 border rounded-md relative w-full "
                        />
                        <button className="admin-search-icon">
                            <HiMagnifyingGlass />
                        </button>
                    </div>
                </div>
                <div className=" ms-auto flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
                        <img
                            src="https://avatars.githubusercontent.com/u/94902748?v=4"
                            className=" w-full "
                        />
                    </div>
                    {username?.charAt(0).toUpperCase() + username?.slice(1)}
                </div>
            </nav>

            <aside
                className={` ${
                    sidebarOpen ? "col-span-2" : "col-span-1"
                } col-start-1 row-span-full row-start-1 border-r ease-in-out border-[#405189] bg-[#405189] px-4 text-white flex flex-col`}
            >
                <Link
                    to="/"
                    className={`px-3 py-2 mb-5 mt-4 text-2xl font-bold text-center uppercase ${
                        sidebarOpen ? "text-lg" : " text-xs"
                    } `}
                >
                    Tech Nest
                </Link>
                <ul className="flex flex-col gap-2 mt-4 flex-1">
                    <li className="flex items-center">
                        <AdminNavLink
                            path="/seller/"
                            text={`${sidebarOpen ? "Dashboard" : ""}`}
                            className={`${
                                sidebarOpen ? " flex-1" : "flex-grow-0 m-auto"
                            }`}
                        >
                            <HiMiniSquares2X2 />
                        </AdminNavLink>
                    </li>

                    <li className="flex">
                        <AdminNavLink
                            path="/seller/products"
                            text={`${sidebarOpen ? "Products" : ""}`}
                            className={`${
                                sidebarOpen ? " flex-1" : "flex-grow-0 m-auto"
                            }`}
                        >
                            <HiMiniShoppingCart />
                        </AdminNavLink>
                    </li>

                    <li
                        className="flex items-center gap-3 mt-auto mb-4 cursor-pointer"
                        onClick={logoutUser}
                    >
                        <HiOutlineArrowLeftOnRectangle />
                        <span
                            className={`${
                                sidebarOpen ? " flex-1" : "flex-grow-0 m-auto"
                            }`}
                        >
                            {`${sidebarOpen ? "Logout" : ""}`}
                        </span>
                    </li>
                </ul>
            </aside>

            <main
                className={`col-span-12 ${
                    sidebarOpen ? "col-start-3" : "col-start-2"
                } col-span-full row-span-full row-start-2 overflow-x-hidden overflow-y-auto bg-gray-200 p-4`}
            >
                <Outlet />
            </main>
        </div>
    );
}
