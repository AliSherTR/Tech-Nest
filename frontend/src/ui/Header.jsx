import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useAuth } from "../context/authContext";
import Dropdown from "./Dropdown";

const Header = () => {
    const { state } = useAuth();
    return (
        <>
            <header className=" mx-auto px-4 py-2 flex items-center justify-between bg-gray-900 text-white ">
                <Link to="/" className="font-boldk text-xl text-teal-500">
                    <img src={logo} alt="Tech Nest" className=" w-12 h-12" />
                </Link>
                <nav>
                    <ul className="flex items-center justify-center font-semibold">
                        <li className="relative group px-3 py-2">
                            <a
                                href="#"
                                className="text-teal-400 hover:opacity-50 cursor-pointer"
                            >
                                Home
                            </a>
                        </li>
                        <li className="relative group px-3 py-2">
                            <button className="hover:opacity-50 cursor-pointer">
                                Products
                            </button>
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
                                                        <a
                                                            href="#"
                                                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-teal-500"
                                                        >
                                                            Apple iPhone 15 Pro
                                                            Max...
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-teal-500"
                                                        >
                                                            HP 250 G9 Core i5
                                                            12th Generation 8GB
                                                            RAM...
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-teal-500"
                                                        >
                                                            HP Pavilion 15
                                                            EG3148NIA Core i5
                                                            13th Generation 8GB
                                                            RAM 512GB...
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-teal-500"
                                                        >
                                                            Apple iPhone 15 Pro
                                                            Max 256GB Storage
                                                            Esim PTA...
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className=" col-start-3 col-end-4">
                                                <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                                                    Best Selling
                                                </p>
                                                <ul className="mt-3 text-[15px]">
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-teal-500"
                                                        >
                                                            Apple iPad Pro 12.9
                                                            M2 Chip 16GB RAM 1TB
                                                            Storage WIFI+5G
                                                            NON...
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-teal-500"
                                                        >
                                                            Apple iPad Pro 11 M2
                                                            Chip...
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:teal-500"
                                                        >
                                                            Apple iPad 10th
                                                            Generation 256GB
                                                            Wifi...
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-teal-500"
                                                        >
                                                            Huawei MatePad T 10s
                                                            4GB RAM 64GB Storage
                                                            Cellular SIM...
                                                        </a>
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
                        <li className="relative group px-3 py-2">
                            <button className="hover:opacity-50 cursor-pointer">
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
                                                <a
                                                    href="#"
                                                    className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-black font-semibold hover:from-teal-400 hover:to-teal-700 hover:via-teal-500 py-1 block"
                                                >
                                                    Mobile
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-black font-semibold hover:from-teal-400 hover:to-teal-700 hover:via-teal-500 py-1 block"
                                                >
                                                    Laptop
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-black font-semibold hover:from-teal-400 hover:to-teal-700 hover:via-teal-500 py-1 block"
                                                >
                                                    Ipad
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="relative group px-3 py-2">
                            <a
                                href="#"
                                className="hover:text-teal-500 cursor-pointer  "
                            >
                                Contact Us
                            </a>
                        </li>
                        <li className="relative group px-3 py-2">
                            <a
                                href="#"
                                className=" hover:hover:text-teal-500 cursor-pointer"
                            >
                                About Us
                            </a>
                        </li>
                        <li className="relative group px-3 py-2">
                            <button className="hover:opacity-50 cursor-default">
                                Help
                            </button>
                            <div className="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform">
                                <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                                    <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                                    <div className="relative z-10">
                                        <ul className="text-[15px]">
                                            <li>
                                                <a
                                                    href="#"
                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                >
                                                    Get Support
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                >
                                                    Blog
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                >
                                                    FAQs
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                >
                                                    Guides
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                >
                                                    News &amp; Events
                                                </a>
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
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-12 h-7 stroke-Black peer-focus: hover:text-teal-500 cursor-pointer"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                    />
                                </svg>
                            </div>
                        ) : (
                            <Link to="/authentication">Login</Link>
                        )}
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;
