import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useAuth } from "../context/authContext";
import Dropdown from "./Dropdown";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

const Header = () => {
    const { state } = useAuth();
    const { cartItems } = useContext(CartContext);
    return (
        <>
            <header className=" mx-auto px-4 py-2 flex justify-between  bg-gray-900 text-white sticky w-full top-0 z-[100] ">
                <Link to="/" className="font-boldk text-xl text-teal-500">
                    <img src={logo} alt="Tech Nest" className=" w-12 h-12" />
                </Link>
                <nav className=" basis-[40%]">
                    <ul className="flex font-semibold mx-auto  h-full">
                        <li className="relative group flex-1 flex  ">
                            <NavLink
                                to="/"
                                className=" hover:opacity-50 cursor-pointer flex-1 flex items-center justify-center"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="relative group flex-1 flex ">
                            <NavLink
                                to="/product"
                                className="hover:opacity-50 cursor-pointer flex-1 flex items-center justify-center"
                            >
                                Products
                            </NavLink>
                            <div className="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
                                <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                                    <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>

                                    <div className="relative z-10">
                                        <div className="grid grid-cols-8 gap-4 max-w-5xl w-[64rem]">
                                            <div className=" col-start-1 col-end-2">
                                                <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                                                    New Products
                                                </p>
                                                <ul className="mt-3 text-[15px]">
                                                    <li>
                                                        <NavLink
                                                            to="/product/65fc0e663d1a411bc1b150a3"
                                                            href="#"
                                                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-teal-500"
                                                        >
                                                            Apple iPhone 15 Pro
                                                            Max...
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink
                                                            to="/product/65fc0fb53d1a411bc1b150b4"
                                                            href="#"
                                                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-teal-500"
                                                        >
                                                            HP 250 G9 Core i5
                                                            12th Generation 8GB
                                                            RAM...
                                                        </NavLink>
                                                    </li>

                                                    <li>
                                                        <NavLink
                                                            to="/product/65fc0e663d1a411bc1b150a3"
                                                            href="#"
                                                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-teal-500"
                                                        >
                                                            Apple iPhone 15 Pro
                                                            Max 256GB Storage
                                                            Esim PTA...
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className=" col-start-3 col-end-4">
                                                <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                                                    Best Selling
                                                </p>
                                                <ul className="mt-3 text-[15px]">
                                                    <li>
                                                        <NavLink
                                                            to="/product/65fc11313d1a411bc1b150bd"
                                                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-teal-500"
                                                        >
                                                            Apple iPad Pro 12.9
                                                            M2 Chip 16GB RAM 1TB
                                                            Storage WIFI+5G
                                                            NON...
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink
                                                            to="/product/65f5e3e6e8b1fdfe2e41d9d8"
                                                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-teal-500"
                                                        >
                                                            Apple iPad Pro 11 M2
                                                            Chip...
                                                        </NavLink>
                                                    </li>

                                                    <li>
                                                        <NavLink
                                                            to="/product/65fc121a3d1a411bc1b150c7"
                                                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-teal-500"
                                                        >
                                                            Huawei MatePad T 10s
                                                            4GB RAM 64GB Storage
                                                            Cellular SIM...
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className=" col-start-5 col-end-8">
                                                <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                                                    TOP Products
                                                </p>

                                                <div className="grid grid-rows-2 gir gap-1 pt-6">
                                                    <div className="inset-0 flex items-center justify-center">
                                                        <img
                                                            src="https://www.mega.pk/items_images/ts_24746.webp"
                                                            alt="Image description"
                                                            className="max-h-full w-full object-contain"
                                                        />
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div className="inset-0 flex items-center justify-center">
                                                            <img
                                                                src="https://www.mega.pk/items_images/ts_24678.webp"
                                                                alt="Image description"
                                                                className="max-h-full w-auto object-contain"
                                                            />
                                                        </div>
                                                        <div className="inset-0 flex items-center justify-center">
                                                            <img
                                                                src="https://www.mega.pk/items_images/ts_24204.webp"
                                                                alt="Image description"
                                                                className="max-h-full w-full object-contain"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="relative group flex-1 flex ">
                            <button className="hover:opacity-50 cursor-pointer flex-1 flex items-center">
                                Catagories
                            </button>
                            <div className="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[260px] transform">
                                <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                                    <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                                    <div className="relative z-10">
                                        <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                                            Technology Categories
                                        </p>
                                        <ul className="mt-3 text-[15px]">
                                            <li>
                                                <NavLink
                                                    to="/collection/mobile"
                                                    className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-black font-semibold hover:from-teal-400 hover:to-teal-700 hover:via-teal-500 py-1 block"
                                                >
                                                    Mobile
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/collection/laptop"
                                                    className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-black font-semibold hover:from-teal-400 hover:to-teal-700 hover:via-teal-500 py-1 block"
                                                >
                                                    Laptop
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/collection/tablet"
                                                    className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-black font-semibold hover:from-teal-400 hover:to-teal-700 hover:via-teal-500 py-1 block"
                                                >
                                                    Tablets
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/collection/audio"
                                                    className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-black font-semibold hover:from-teal-400 hover:to-teal-700 hover:via-teal-500 py-1 block"
                                                >
                                                    Audio
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/collection/others"
                                                    className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-black font-semibold hover:from-teal-400 hover:to-teal-700 hover:via-teal-500 py-1 block"
                                                >
                                                    Accessories
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="relative group flex-1 flex">
                            <NavLink
                                to="/contact-us"
                                className="hover:text-teal-500 cursor-pointer flex-1 flex items-center justify-center "
                            >
                                Contact Us
                            </NavLink>
                        </li>
                        <li className="relative group flex-1 flex">
                            <NavLink
                                to="/about-us"
                                className=" hover:hover:text-teal-500 cursor-pointer flex-1 flex items-center justify-center"
                            >
                                About Us
                            </NavLink>
                        </li>
                        <li className="relative group flex-1 flex ">
                            <NavLink
                                to="/faqs"
                                className="hover:opacity-50 cursor-default flex-1 flex items-center justify-center"
                            >
                                Help
                            </NavLink>
                            <div className="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform">
                                <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                                    <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                                    <div className="relative z-10">
                                        <ul className="text-[15px]">
                                            <li>
                                                <NavLink
                                                    to="/faqs"
                                                    href="#"
                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                >
                                                    FAQs
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
                <nav>
                    <ul>
                        {state.user ? (
                            <div className="flex p-4 justify-center mr-5 ">
                                <Dropdown />
                                <div className=" relative">
                                    <Link to="/cart">
                                        {" "}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                            />
                                        </svg>
                                    </Link>
                                    <span className=" absolute left-full top-[-5px] px-2 py-2 bg-emerald-400 flex items-center justify-center rounded-full text-xs right-0 bottom-3">
                                        {!cartItems.length
                                            ? "0"
                                            : cartItems.length}
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <div className=" flex items-center justify-between gap-5 me-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                    />
                                </svg>

                                <Link to="/authentication">Login</Link>
                            </div>
                        )}
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;
