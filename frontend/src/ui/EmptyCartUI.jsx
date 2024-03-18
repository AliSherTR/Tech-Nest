import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function EmptyCartUI() {
    return (
        <div className=" flex min-h-screen flex-col justify-between">
            <div>
                <Header />
            </div>
            <div className=" max-w-4xl mx-auto flex flex-col items-center justify-center p-5 mt-10">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-24 h-24 text-teal-600"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                </svg>

                <h1 className=" text-base md:text-2xl font-semibold">
                    Your Cart is Empty{" "}
                </h1>
                <Link
                    to="/"
                    className="flex font-semibold text-indigo-600 text-sm mt-10"
                >
                    <svg
                        className="fill-current mr-2 text-indigo-600 w-4"
                        viewBox="0 0 448 512"
                    >
                        <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                    </svg>
                    Continue Shopping
                </Link>
            </div>
            <Footer />
        </div>
    );
}
