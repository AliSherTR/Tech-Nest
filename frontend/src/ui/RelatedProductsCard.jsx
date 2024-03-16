import { FaHeart } from "react-icons/fa";

export default function RelatedProductsCard({ image, name, category, price }) {
    return (
        <div className=" me-12 bg-white shadow-md rounded-lg overflow-hidden transition duration-200 hover:translate-y-0.5 hover:shadow-lg relative h-full">
            <img src={image} alt="Product Image" className="w-full h-full " />
            <div className="p-4">
                <h2 className="font-semibold text-lg mb-2">{name}</h2>
                <p className="text-gray-700 mb-2 line-clamp-2">{category}</p>
                <p className="text-gray-900 font-bold">{price}</p>
                <FaHeart
                    fill="red"
                    size={"20px"}
                    className="absolute right-0 m-6 text-2xl transition duration-200 cursor-pointer text-darkgreen"
                />
                <button className="mt-4 bg-teal-500 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded  w-4/5">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
