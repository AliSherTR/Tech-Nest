import { useQuery } from "react-query";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import Hero from "../ui/Hero";
import ProductCard from "../ui/ProductCard";
import { getAllProducts } from "../utils/helpers";
import Slider from "react-slick";
import LoadingIndicator from "../ui/LoadingIndicator";
// import Collection from "../ui/Collection";
import Textwithimage from "../ui/TextWithImage";
import Faqs from "../ui/Faqs";
// import Shipping from "../ui/Shipping";

export default function Home() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
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
    const { isLoading, data: products } = useQuery({
        queryKey: ["products"],
        queryFn: getAllProducts,
    });

    return (
        <>
            <Header />
            <Hero />
            <div className="m-auto max-w-[1200px]">
                <Slider {...settings}></Slider>

                <h3 className="mt-20 mb-10 text-center text-3xl font-bold tracking-tight md:text-5xl">
                    Our Products
                </h3>

                <div className="mb-3 grid grid-cols-4 gap-4">
                    {isLoading && <LoadingIndicator />}
                    {products?.map((product) => {
                        return (
                            <ProductCard
                                key={product._id}
                                image={`http://localhost:8000/${product.image}`}
                                price={product.price}
                                name={product.name}
                                id={product._id}
                            />
                        );
                    })}
                </div>

                <div>
                    <Textwithimage />
                </div>
                <div>
                    <Faqs />
                </div>
            </div>
            <Footer />
        </>
    );
}
