import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Product({
    image,
    name,
    description,
    price,
    id,
    category,
    onclick,
}) {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden transition duration-200 hover:translate-y-0.5 hover:shadow-lg relative h-full">
            <Link to={`/product/${id}`}>
                <img src={image} alt="Product Image" className="w-full h-64" />
                <div className="p-4 ">
                    <h2 className="font-semibold text-lg mb-2 text-teal-500 line-clamp-1">
                        {name}
                    </h2>
                    <p className="text-gray-700 mb-2 line-clamp-2">
                        {description}
                    </p>
                    <p className="text-gray-700 mb-2">{category}</p>
                    <p className="text-gray-900 font-bold">{price} Rs</p>
                </div>
            </Link>
            <div className="p-4">
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
    );
}
