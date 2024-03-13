import { Link } from "react-router-dom";

const products = [
    {
        image: "https://appleshop.com.pk/wp-content/uploads/2023/06/mba15-midnight-gallery1.jpeg",
        name: "Apple MacBook Pro 2016",
        quantity: 3,
        pricePerItem: 37000,
    },
    {
        image: "https://appleshop.com.pk/wp-content/uploads/2023/06/mba15-midnight-gallery1.jpeg",
        name: "Product 2",
        quantity: 5,
        pricePerItem: 2500,
    },
    {
        image: "https://appleshop.com.pk/wp-content/uploads/2023/06/mba15-midnight-gallery1.jpeg",
        name: "Product 3",
        quantity: 1,
        pricePerItem: 1500,
    },
    {
        image: "https://appleshop.com.pk/wp-content/uploads/2023/06/mba15-midnight-gallery1.jpeg",
        name: "Product 4",
        quantity: 10,
        pricePerItem: 5000,
    },
];
export default function Checkout() {
    return (
        <div className=" max-w-screen-lg m-auto p-5">
            <Link
                to={"/"}
                className=" py-3 px-3 border shadow-sm rounded-md mt-5 inline-block"
            >
                Continue Shopping &rarr;
            </Link>
            <h1 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl mb-5">
                Checkout
            </h1>
            <div className=" py-1">
                {products.map((product, i) => {
                    return (
                        <>
                            <div className="grid grid-cols-2" key={i}>
                                <div className="flex gap-3 flex-col md:flex-row">
                                    <img
                                        src={product.image}
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
                                    Price Per Item: {product.pricePerItem}
                                </p>
                            </div>
                        </>
                    );
                })}
            </div>
            <div className=" py-2 px-4 border rounded-md mb-3 ">
                <p className=" flex justify-between mb-3">
                    <span>Total Amount:</span> <span>20000</span>
                </p>

                <p className=" flex justify-between mb-3">
                    <span>Shipping Cost:</span> <span> 200</span>
                </p>

                <p className=" flex justify-between mb-3">
                    <span>Sub Total:</span>{" "}
                    <span className=" font-semibold"> 20200</span>
                </p>
            </div>
            <div className=" px-3 flex justify-between">
                <Link className=" px-3 py-2">&larr; Back to Cart</Link>
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
