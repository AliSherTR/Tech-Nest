import { useState } from "react";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import { BASE_URL } from "../utils/helpers";
import LoadingIndicator from "../ui/LoadingIndicator";
import toast from "react-hot-toast";

const ProductPage = () => {
    const { id } = useParams();
    console.log(id);

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
    console.log(product);

    const [images, setImages] = useState({
        img1: "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1699615204070/a923ea0d9dc9c164891bada74f533c12.png",
        img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzWgx_eHL6OYZEeZK_yHKuwfNzLsLXNIbQVF78gxRq2pda1UIOC1ArDjHb3t0zMEcGgJk&usqp=CAU",
        img3: "https://ph-live-01.slatic.net/p/0b6867065ddda3bd6fb0e0a5d4454ccb.jpg",
        img4: "https://manilashaker.com/wp-content/uploads/2023/07/ready-to-store-more-with-vivo-y36.jpg",
    });

    const [amount, setAmount] = useState(1);

    if (isLoading) return <LoadingIndicator />;

    return (
        <>
            <Header />

            <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
                <div className="flex flex-col gap-6 lg:w-2/4">
                    <img
                        src={`http://localhost:8000/${product.image}`}
                        alt=""
                        className="w-full h-full aspect-square object-cover rounded-xl"
                    />
                </div>
                {/* ABOUT */}
                <div className="flex flex-col gap-4 lg:w-2/4">
                    <div>
                        <span className=" text-teal-600 font-semibold">
                            {product.brand}
                        </span>
                        <h1 className="text-3xl font-bold">{product.name}</h1>
                    </div>
                    <p className="text-gray-700">{product.description}</p>
                    <h6 className="text-2xl font-semibold">
                        $ {product.price}
                    </h6>
                    <div className="flex flex-col md:flex-row md:items-center gap-12">
                        <div className="flex flex-row items-center">
                            <button
                                className="bg-gray-200 py-2 px-5 rounded-lg text-teal-800 text-3xl"
                                onClick={() => setAmount((prev) => prev - 1)}
                            >
                                -
                            </button>
                            <span className="py-4 px-6 rounded-lg">
                                {amount}
                            </span>
                            <button
                                className="bg-gray-200 py-2 px-4 rounded-lg text-teal-800 text-3xl"
                                onClick={() => setAmount((prev) => prev + 1)}
                            >
                                +
                            </button>
                        </div>
                        <button className="bg-teal-400 text-white font-semibold py-3 px-16 rounded-xl h-full">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductPage;
