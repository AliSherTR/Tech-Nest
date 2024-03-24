import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SalesProduct({
    id,
    image,
    name,
    category,
    price,
    discountPrice,
    onclick,
}) {
    return (
        <div className="border w-full h-full">
            <div className=" relative border">
                <Link to={`/product/${id}`}>
                    <img
                        src={`http://localhost:8000/${image}`}
                        alt={name}
                        className="w-full h-64"
                    />
                    <div className="p-4 ">
                        <h2 className="font-semibold text-lg mb-2">{name}</h2>
                        <p className="text-gray-700 mb-2 line-clamp-2">
                            {category}
                        </p>
                        <div className="flex items-center">
                            <p className="text-gray-500 line-through mr-2 font-bold">
                                {price}
                            </p>
                            <p className=" font-bold text-red-700  text-xl">
                                {discountPrice}
                            </p>
                        </div>
                    </div>
                </Link>
                <div className="p-4">
                    <span className="inline-block bg-red-500 text-white px-2 py-1 rounded-full uppercase text-xs font-bold tracking-wide top-3 right-2 absolute">
                        Sale
                    </span>
                    <FaHeart
                        fill="red"
                        size={"20px"}
                        className="absolute right-0 m-6 text-2xl transition duration-200 cursor-pointer text-darkgreen"
                    />
                    <button
                        onClick={onclick}
                        className="mt-4 bg-teal-500 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded  w-4/5"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
