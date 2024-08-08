import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";

export default function Checkout() {
    const { cartItems, getTotalCartPrice } = useContext(CartContext);
    const totalPrice = getTotalCartPrice();
    return (
        <div className=" max-w-screen-lg m-auto p-5">
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
            <h1 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl mb-5">
                Checkout
            </h1>
            <div className=" py-1">
                {cartItems.map((product) => {
                    return (
                        <div key={product.id}>
                            <div className="grid grid-cols-2">
                                <div className="flex gap-3 flex-col md:flex-row">
                                    <img
                                        src={`http://localhost:8000/${product.image}`}
                                        alt=""
                                        className="w-1/4"
                                    />
                                    <div className=" self-center">
                                        <p>
                                            {" "}
                                            <span className=" font-semibold text-sm md:text-base">
                                                Name:
                                            </span>{" "}
                                            {product.name}
                                        </p>
                                        <p>
                                            {" "}
                                            <span className=" font-semibold">
                                                Quantity:
                                            </span>{" "}
                                            {product.quantity}
                                        </p>
                                    </div>
                                </div>
                                <p className="self-center ms-auto">
                                    Price: {product.price * product.quantity} Rs
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className=" py-2 px-4 border rounded-md mb-3 ">
                <p className=" flex justify-between mb-3">
                    <span>Total Amount:</span> <span>{totalPrice} Rs</span>
                </p>

                <p className=" flex justify-between mb-3">
                    <span>Standard Shipping Cost:</span> <span> 100 Rs</span>
                </p>

                <p className=" flex justify-between mb-3">
                    <span>Sub Total:</span>{" "}
                    <span className=" font-semibold">
                        {" "}
                        {totalPrice + 100} Rs
                    </span>
                </p>
            </div>
            <div className=" px-3 flex justify-between">
                <Link to="/cart" className=" px-3 py-2">
                    &larr; Back to Cart
                </Link>
                <Link
                    to={{
                        pathname: "/shipping",
                        state: {
                            data: {
                                total: 5000,
                            },
                        },
                    }}
                    className=" px-3 py-2 bg-green-800 text-white rounded-lg"
                >
                    Proceed To Checkout
                </Link>
            </div>
        </div>
    );
}
