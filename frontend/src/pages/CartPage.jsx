import { useContext } from "react";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
export default function CartPage() {
    const { cartItems, getTotalCartPrice, removeItemFromCart } =
        useContext(CartContext);
    const totalPrice = getTotalCartPrice();

    if (!cartItems.length) return <p>Fuck YOu</p>;

    return (
        <>
            <Header />

            <div className="container m-auto max-w-[1200px]">
                <div className="flex shadow-md my-10">
                    <div className="w-3/4 bg-white px-10 py-10">
                        <div className="flex justify-between border-b pb-8">
                            <h1 className="font-semibold text-2xl">
                                Shopping Cart
                            </h1>
                            <h2 className="font-semibold text-2xl">
                                {cartItems.length} Items
                            </h2>
                        </div>
                        <div className="flex mt-10 mb-5">
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                                Product Details
                            </h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                                Quantity
                            </h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                                Price
                            </h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                                Total
                            </h3>
                        </div>
                        {cartItems.map((item, i) => {
                            return (
                                <div key={i}>
                                    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                                        <div className="flex w-2/5">
                                            <div className="w-20">
                                                <img
                                                    className="h-24"
                                                    src={`http://localhost:8000/${item.image}`}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="flex flex-col justify-between ml-4 flex-grow">
                                                <span className="font-bold text-sm">
                                                    {item.name}
                                                </span>
                                                <span className="text-red-500 text-xs">
                                                    Apple
                                                </span>
                                                <button
                                                    onClick={() =>
                                                        removeItemFromCart(
                                                            item._id
                                                        )
                                                    }
                                                    className="font-semibold hover:text-red-500 text-gray-500 text-xs text-left"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex justify-center w-1/5">
                                            <div className="flex flex-row items-center">
                                                <button
                                                    className=" pb-2  rounded-lg text-teal-800 text-3xl"
                                                    onClick={() =>
                                                        item.quantity - 1
                                                    }
                                                >
                                                    -
                                                </button>
                                                <span className="py-4 px-6 rounded-lg">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    className=" pb-2  rounded-lg text-teal-800 text-3xl"
                                                    onClick={() =>
                                                        item.quantity + 1
                                                    }
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <span className="text-center w-1/5 font-semibold text-sm">
                                            {item.pricePerItem} Rs
                                        </span>
                                        <span className="text-center w-1/5 font-semibold text-sm">
                                            {item.quantity * item.pricePerItem}{" "}
                                            Rs
                                        </span>
                                    </div>
                                </div>
                            );
                        })}

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

                    <div id="summary" className="w-1/4 px-8 py-10">
                        <h1 className="font-semibold text-2xl border-b pb-8">
                            Order Summary
                        </h1>
                        <div className="flex justify-between mt-10 mb-5">
                            <span className="font-semibold text-sm uppercase">
                                Items {cartItems.length}
                            </span>
                            <span className="font-semibold text-sm">
                                {totalPrice} Rs
                            </span>
                        </div>
                        <div>
                            <label className="font-medium inline-block mb-3 text-sm uppercase">
                                Shipping
                            </label>
                            <select className="block p-2 text-gray-600 w-full text-sm">
                                <option>Standard shipping - 100.00 Rs</option>
                            </select>
                        </div>

                        {/* CART SUMMARY */}
                        <div className="border-t mt-8">
                            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Total cost</span>
                                <span>{totalPrice} Rs</span>
                            </div>
                            <Link
                                to={"/checkout"}
                                className="bg-indigo-500 block text-center font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
                            >
                                Checkout
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
