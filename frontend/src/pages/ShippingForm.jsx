import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";

export default function ShippingForm() {
    const { getTotalCartPrice, cartItems } = useContext(CartContext);
    const totalAmount = getTotalCartPrice();

    return (
        <div className=" max-w-6xl m-auto">
            <Link
                to={"/"}
                className=" py-3 px-3 border shadow-sm rounded-md mt-5 inline-block"
            >
                Continue Shopping &rarr;
            </Link>

            <div className=" flex gap-7 mt-4">
                <div className=" flex-1">
                    <form action="">
                        <label
                            htmlFor="email"
                            className=" block mb-4 font-semibold"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email Address"
                            className=" w-full border px-3 py-4 rounded-md"
                        />

                        <h1 className=" text-sm font-semibold uppercase mt-5">
                            Shipping
                        </h1>
                        <div className=" flex mt-4 gap-3 mb-3">
                            <input
                                type="text"
                                placeholder="First Name"
                                className=" flex-1 border px-3 py-4 rounded-md"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className=" flex-1 border px-3 py-4 rounded-md"
                            />
                        </div>
                        <input
                            type="number"
                            placeholder="Phone Number"
                            className=" w-full block mb-3 border px-3 py-4 rounded-md"
                        />
                        <input
                            type="text"
                            placeholder="Address"
                            className=" w-full block mb-3 border px-3 py-4 rounded-md"
                        />

                        <div className=" flex mt-4 gap-3 mb-3">
                            <input
                                type="text"
                                placeholder="City"
                                className=" flex-1 border px-3 py-4 rounded-md"
                            />
                            <input
                                type="number"
                                placeholder="Zip Code"
                                className=" flex-1 border px-3 py-4 rounded-md"
                            />
                        </div>
                    </form>
                    <div>
                        <h1 className=" text-sm font-semibold mt-4">
                            Select Payment Method
                        </h1>
                        <div className=" flex gap-3 mt-4">
                            <Link className=" px-3 py-3 flex-1 border rounded-sm flex items-center justify-center ">
                                <img
                                    src="https://seeklogo.com/images/E/easypaisa-logo-6B03C216AD-seeklogo.com.png"
                                    alt=""
                                    className=" w-1/2 block m-auto"
                                />
                            </Link>
                            <Link className=" px-3 py-3 flex-1 border rounded-sm flex items-center justify-center ">
                                <img
                                    src="https://www.nicepng.com/png/detail/392-3926074_credit-or-debit-card-visa-mastercard-logo-hd.png"
                                    alt=""
                                    className=" w-1/2 block m-auto"
                                />
                            </Link>
                            <Link className=" px-3 py-3 flex-1 border rounded-sm text-center flex items-center justify-center ">
                                CASH ON DELIVERY
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="p-8 bg-gray-400 basis-4/12">
                    <h3 className=" text-lg font-semibold mb-2 ">
                        Cart Summary
                    </h3>

                    {cartItems.map((item, i) => {
                        return (
                            <div key={i}>
                                <div className=" flex justify-between text-sm text-gray-800 mb-6 font-semibold">
                                    <span>
                                        {" "}
                                        <span>{i + 1}</span> - {item.name}
                                    </span>
                                    <span>
                                        {item.pricePerItem * item.quantity} Rs
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                    <hr />
                    <span className="block mb-3 mt-4 text-right text-sm ms-auto font-semibold">
                        Delivery Charges: 200 Rs
                    </span>
                    <span className="block mb-3 text-right text-sm ms-auto font-semibold">
                        Total Price: {totalAmount} Rs
                    </span>
                    <hr />
                    <span className="block mb-3 mt-4 text-right text-sm ms-auto font-semibold">
                        Sub Total: {totalAmount + 200} Rs
                    </span>
                </div>
            </div>
        </div>
    );
}
