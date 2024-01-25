import { useQuery } from "react-query";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import Hero from "../ui/Hero";
import ProductCard from "../ui/ProductCard";
import { getAllProducts } from "../utils/helpers";

export default function Home() {
    const { isLoading, data: products } = useQuery({
        queryKey: ["products"],
        queryFn: getAllProducts,
    });

    return (
        <>
            <Header />
            <Hero />

            <div className=" max-w-screen-xl m-auto rounded-lg  mb-3 dark:bg-gray-800 dark:border-gray-700">
                <h1 className=" font-bold text-center text-3xl">
                    Our Products
                </h1>
                <div className="grid grid-cols-4 gap-3 gap-y-4">
                    {isLoading && <p>Loading........</p>}
                    {products?.map((product) => {
                        return (
                            <ProductCard
                                key={product._id}
                                image={product.images[0]}
                                price={product.price}
                                name={product.name}
                            />
                        );
                    })}
                </div>
            </div>

            <Footer />
        </>
    );
}
