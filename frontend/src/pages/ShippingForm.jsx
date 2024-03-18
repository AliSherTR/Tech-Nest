import { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import { BASE_URL } from "../utils/helpers";
import axios from "axios";
import LoadingIndicator from "../ui/LoadingIndicator";

export default function ShippingForm() {
    const { getTotalCartPrice, cartItems } = useContext(CartContext);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        address: "",
        phone: null,
        email: "",
        city: "",
        zipCode: null,
    });

    const totalAmount = getTotalCartPrice();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckout = async () => {
        try {
            setIsLoading(true);
            const response = await axios.post(
                `${BASE_URL}/checkout`,
                {
                    ...formData,
                    cartItems: cartItems,
                    total: totalAmount,
                },
                {
                    headers: {
                        Authorization: `Bearer sk_test_51OvOeTItkhd81wTnMUtNUx1QMbMOfHMtW0LQVG339rihcSTxFUx9jTbkaYXI676PS1gZ3h2oEVDr2tvfhwxzTrRj00cW1gka7g`,
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.status === 200 && response.data.url) {
                setIsLoading(false);
                window.location = response.data.url;
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className=" max-w-6xl m-auto">
            {isLoading && (
                <div className=" absolute h-full w-full inset-0  modal-background flex items-center justify-center">
                    <LoadingIndicator />
                </div>
            )}

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
                            name="email"
                            placeholder="Email Address"
                            className=" w-full border px-3 py-4 rounded-md"
                            onChange={handleInputChange}
                        />

                        <h1 className=" text-sm font-semibold uppercase mt-5">
                            Shipping
                        </h1>
                        <div className=" flex mt-4 gap-3 mb-3">
                            <input
                                type="text"
                                placeholder="First Name"
                                name="firstName"
                                className=" flex-1 border px-3 py-4 rounded-md"
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                name="lastName"
                                className=" flex-1 border px-3 py-4 rounded-md"
                                onChange={handleInputChange}
                            />
                        </div>
                        <input
                            type="number"
                            placeholder="Phone Number"
                            name="phone"
                            className=" w-full block mb-3 border px-3 py-4 rounded-md"
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            placeholder="Address"
                            name="address"
                            className=" w-full block mb-3 border px-3 py-4 rounded-md"
                            onChange={handleInputChange}
                        />

                        <div className=" flex mt-4 gap-3 mb-3">
                            <input
                                type="text"
                                placeholder="City"
                                name="city"
                                className=" flex-1 border px-3 py-4 rounded-md"
                                onChange={handleInputChange}
                            />
                            <input
                                type="number"
                                placeholder="Zip Code"
                                name="zipCode"
                                className=" flex-1 border px-3 py-4 rounded-md"
                                onChange={handleInputChange}
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
                            <div
                                onClick={handleCheckout}
                                className=" cursor-pointer px-3 py-3 flex-1 border rounded-sm flex items-center justify-center "
                            >
                                <img
                                    src="https://www.nicepng.com/png/detail/392-3926074_credit-or-debit-card-visa-mastercard-logo-hd.png"
                                    alt=""
                                    className=" w-1/2 block m-auto"
                                />
                            </div>
                            <Link className=" px-3 py-3 flex-1 border rounded-sm text-center flex items-center justify-center ">
                                CASH ON DELIVERY
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="p-8 bg-gray-200 basis-4/12">
                    <h3 className=" text-lg font-semibold mb-2 ">
                        Cart Summary
                    </h3>

                    {cartItems.map((item, i) => {
                        return (
                            <div key={i}>
                                <div className=" flex justify-between text-sm text-gray-800 mb-6 font-semibold">
                                    <span className=" line-clamp-1">
                                        {" "}
                                        <span>{i + 1}</span> - {item.name}
                                    </span>
                                    <span>{item.price * item.quantity} Rs</span>
                                </div>
                            </div>
                        );
                    })}
                    <hr className=" bg-gray-800 h-[1.5px]" />
                    <span className="block mb-3 mt-4 text-right text-sm ms-auto font-semibold">
                        Delivery Charges: 200 Rs
                    </span>
                    <span className="block mb-3 text-right text-sm ms-auto font-semibold">
                        Total Price: {totalAmount} Rs
                    </span>
                    <hr />
                    <span className="block mb-3 mt-4 text-right text-sm ms-auto font-semibold">
                        <span className=" text-teal-500">Sub Total:</span>{" "}
                        {totalAmount + 200} Rs
                    </span>
                </div>
            </div>
        </div>
    );
}
