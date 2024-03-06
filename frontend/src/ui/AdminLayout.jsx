import { Link, Navigate, Outlet } from "react-router-dom";
import AdminNavLink from "./AdminNavLink";
import { useState } from "react";
import logo from "../assets/logo.png";
import {
    HiBars3CenterLeft,
    HiMagnifyingGlass,
    HiMiniShoppingCart,
    HiMiniSquares2X2,
    HiMiniUser,
    HiOutlineArrowLeftOnRectangle,
} from "react-icons/hi2";
import { useAuth } from "../context/authContext";
import LoadingIndicator from "./LoadingIndicator";
import { logoutUser } from "../utils/helpers";
import { HiChevronDown } from "react-icons/hi";
export default function AdminLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [openUsers, setOpenUsers] = useState(false);
    const [openProducts, setOpenProducts] = useState(false);
    const toggleUsers = () => {
        setOpenUsers(!openUsers);
    };

    const toggleProducts = () => {
        setOpenProducts(!openProducts);
    };

    const { state } = useAuth();
    if (!state || !state.user) {
        return <LoadingIndicator />;
    }
    const { role, username } = state.user;
    return (
        <div className="grid grid-cols-12 grid-rows-12 h-screen">
            {role === "admin" ? (
                <>
                    <nav
                        className={`col-span-12 ${
                            sidebarOpen ? "col-start-3" : "col-start-2"
                        }  auto-rows-min grid-rows-8 text-black flex items-center px-4 ease-in-out`}
                    >
                        <div className="flex items-center basis-1/4 gap-4">
                            <button
                                onClick={() => setSidebarOpen(!sidebarOpen)}
                            >
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
                            {username?.charAt(0).toUpperCase() +
                                username?.slice(1)}
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
                            <img
                                src={logo}
                                alt="Tech Nest"
                                className=" w-14 h-14 block m-auto"
                            />
                            Tech Nest
                        </Link>

                        <ul className="flex flex-col gap-2 mt-4 flex-1">
                            <li className="">
                                <AdminNavLink
                                    path="/admin/"
                                    text={`${sidebarOpen ? "Dashboard" : ""}`}
                                    className={`${
                                        sidebarOpen
                                            ? " flex-1"
                                            : "flex-grow-0 m-auto"
                                    }`}
                                >
                                    <HiMiniSquares2X2 />
                                </AdminNavLink>
                            </li>

                            <li className=" flex flex-col px-3 cursor-pointer mb-3 mt-2">
                                <div
                                    className={`flex-1 flex items-center gap-3 ${
                                        sidebarOpen ? "justify-between" : ""
                                    } `}
                                >
                                    <div className=" flex items-center gap-2 ">
                                        <HiMiniUser />{" "}
                                        <span className=" ms-1">{`${
                                            sidebarOpen ? "Users" : ""
                                        }`}</span>
                                    </div>
                                    <div>
                                        <HiChevronDown
                                            onClick={() => toggleUsers()}
                                        />
                                    </div>
                                </div>

                                {openUsers && (
                                    <div className=" mt-3 ">
                                        <AdminNavLink
                                            path="/admin/users"
                                            text="All Users"
                                            className={`${
                                                sidebarOpen
                                                    ? " flex-1"
                                                    : "flex-grow-0 m-auto"
                                            }`}
                                        />

                                        <AdminNavLink
                                            path="/admin/users/add"
                                            text="Add User"
                                            className={`${
                                                sidebarOpen
                                                    ? " flex-1"
                                                    : "flex-grow-0 m-auto"
                                            }`}
                                        />
                                        <AdminNavLink
                                            path="/admin/users/delete"
                                            text="Delete User"
                                            className={`${
                                                sidebarOpen
                                                    ? " flex-1"
                                                    : "flex-grow-0 m-auto"
                                            }`}
                                        />
                                    </div>
                                )}
                            </li>
                            <li className="flex flex-col px-3 cursor-pointer mb-3">
                                <div
                                    className={`flex-1 flex items-center gap-3 ${
                                        sidebarOpen ? "justify-between" : ""
                                    } `}
                                >
                                    <div className=" flex items-center gap-2 ">
                                        <HiMiniShoppingCart />{" "}
                                        <span className=" ms-1">{`${
                                            sidebarOpen ? "Products" : ""
                                        }`}</span>
                                    </div>
                                    <div>
                                        <HiChevronDown
                                            onClick={() => toggleProducts()}
                                        />
                                    </div>
                                </div>

                                {openProducts && (
                                    <div className=" mt-3 ">
                                        <AdminNavLink
                                            path="/admin/products/"
                                            text="All Products"
                                            className={`${
                                                sidebarOpen
                                                    ? " flex-1"
                                                    : "flex-grow-0 m-auto"
                                            }`}
                                        />

                                        <AdminNavLink
                                            path="/admin/products/add"
                                            text="Add Products"
                                            className={`${
                                                sidebarOpen
                                                    ? " flex-1"
                                                    : "flex-grow-0 m-auto"
                                            }`}
                                        />
                                        <AdminNavLink
                                            path="/admin/products/delete"
                                            text="Delete Product"
                                            className={`${
                                                sidebarOpen
                                                    ? " flex-1"
                                                    : "flex-grow-0 m-auto"
                                            }`}
                                        />
                                    </div>
                                )}
                            </li>

                            <li
                                className="flex items-center gap-3 mt-auto mb-4 cursor-pointer"
                                onClick={logoutUser}
                            >
                                <HiOutlineArrowLeftOnRectangle />
                                <span
                                    className={`${
                                        sidebarOpen
                                            ? " flex-1"
                                            : "flex-grow-0 m-auto"
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
                </>
            ) : (
                <Navigate to="/authentication" />
            )}
        </div>
    );
}
