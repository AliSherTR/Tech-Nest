import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Product({ image, name, price, id }) {
    return (
        <Link to={`/product/${id}`} className="block self-stretch">
            <div className="flex flex-col h-full transition duration-200 hover:translate-y-0.5 hover:shadow-lg p-4 border">
                <div className="flex-1">
                    <img
                        src={image}
                        alt="product-img"
                        className="w-1/2 h-1/2 block m-auto mb-4"
                    />
                </div>

                <div className="mt-8 flex-1">
                    <h3 className="text-xl font-bold">{name}</h3>
                    <div className="flex justify-between items-center mt-6">
                        <div className="text-lg font-semibold ">{price} Rs</div>
                        <FaHeart
                            fill="red"
                            size={"20px"}
                            className="text-2xl transition duration-200 cursor-pointer text-darkgreen"
                        />
                    </div>
                    <div className="mt-2">
                        <button
                            type="button"
                            className="text-white w-full bg-teal-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        >
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
}
