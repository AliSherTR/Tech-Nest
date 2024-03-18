import { useContext, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useQuery } from "react-query";
import { BASE_URL, getAllProducts } from "../utils/helpers";
import LoadingIndicator from "../ui/LoadingIndicator";
import toast from "react-hot-toast";
import Slider from "react-slick";
import axios from "axios";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import Faqs from "../ui/Faqs";

import ProductCard from "../ui/ProductCard";
import { CartContext } from "../context/cartContext";

const ProductPage = () => {
    const { addItemToCart } = useContext(CartContext);
    const settings = {
        dots: true,
        infinite: false,
        speed: 300,
        autoplay: true,
        pauseOnFocus: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const { id } = useParams();
    const { isLoading, data: product } = useQuery({
        queryKey: ["product", id],
        queryFn: async () => {
            const res = await axios.get(`${BASE_URL}/products/${id}`);
            return res.data.data;
        },
        onError: () => {
            toast.error("There was an error getting the product");
            <Navigate to={"/admin/products"} />;
        },
    });
    const { data: products } = useQuery({
        queryKey: ["products"],
        queryFn: getAllProducts,
    });
    const [amount, setAmount] = useState(1);

    const [activeTab, setActiveTab] = useState("dashboard");

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    if (isLoading) return <LoadingIndicator />;

    return (
        <>
            <Header />

            <div className="container mx-auto px-4 py-8  max-w-[1200px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:order-1">
                        <img
                            src={`http://localhost:8000/${product.image}`}
                            alt="Product Image"
                            className="w-full rounded-lg shadow-md"
                        />
                    </div>

                    <div className="md:order-2 mt-10 ">
                        <h2 className="text-2xl font-bold mb-4">
                            {product.name}
                        </h2>
                        <span className=" text-teal-600 font-semibold ">
                            {product.brand}
                        </span>
                        <p className="text-gray-700 mb-4 mt-2 line-clamp-4 ">
                            {product.description}
                        </p>
                        <div className="flex flex-col md:flex-row md:items-center gap-12 mb-4">
                            <div className="flex flex-row items-center">
                                <button
                                    className="bg-gray-200 pb-2 px-5 rounded-lg text-teal-800 text-3xl"
                                    onClick={() =>
                                        setAmount((prev) => prev - 1)
                                    }
                                >
                                    -
                                </button>
                                <span className="py-4 px-6 rounded-lg">
                                    {amount}
                                </span>
                                <button
                                    className="bg-gray-200 pb-2 px-4 rounded-lg text-teal-800 text-3xl"
                                    onClick={() =>
                                        setAmount((prev) => prev + 1)
                                    }
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <p className="text-2xl font-bold mb-4">
                            {product.price} Rs
                        </p>
                        <div className="flex gap-2">
                            <div className="flex-1">
                                <button
                                    className="bg-teal-500 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded w-2/4"
                                    onClick={() =>
                                        addItemToCart({
                                            name: product.name,
                                            id: product._id,
                                            quantity: amount,
                                            image: product.image,
                                            price: product.price,
                                        })
                                    }
                                >
                                    Add to Cart
                                </button>
                            </div>
                            <div>
                                <FaHeart
                                    fill="red"
                                    size={"30px"}
                                    className="absolute right-0 m-2 text-2xl transition duration-200 cursor-pointer text-darkgreen w-2/4"
                                />
                            </div>
                        </div>
                        <div className="mt-5">
                            <p className=" font-bold">
                                Category:{" "}
                                <span className=" font-normal">
                                    {product.category}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto mb-20">
                <div className="border-b border-gray-200 dark:border-gray-700 mb-4">
                    <ul className="flex flex-wrap -mb-px p-4" role="tablist">
                        <li className="mr-2" role="presentation">
                            <button
                                className={`p-2 bg-black text-white tab-button ${
                                    activeTab === "Description" ? "active" : ""
                                }`}
                                onClick={() => handleTabClick("Description")}
                                role="tab"
                                aria-controls="Description"
                                aria-selected={activeTab === "Description"}
                            >
                                Description
                            </button>
                        </li>
                    </ul>
                </div>
                <div id="myTabContent">
                    <div
                        className={`bg-gray-50 p-4 rounded-lg dark:bg-gray-800 ${
                            activeTab !== "Description" ? "hidden" : ""
                        }`}
                        id="Description"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                    >
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                            {product.description}
                        </p>
                    </div>
                </div>
            </div>

            <div className=" max-w-[1200px] m-auto ">
                <div className="mb-5">
                    <h2 className="font-bold text-4xl">Related Products</h2>
                </div>
                <div className="slider-container">
                    <Slider {...settings}>
                        {products?.map((product) => (
                            <ProductCard
                                key={product._id}
                                name={product.name}
                                image={`http://localhost:8000/${product.image}`}
                                price={product.price}
                                category={product.category}
                            />
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="container mx-auto px-4 py-8  max-w-[1200px]">
                <Faqs />
            </div>
            <Footer />
        </>
    );
};

export default ProductPage;
