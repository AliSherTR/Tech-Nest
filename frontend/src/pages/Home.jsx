import { useQuery } from "react-query";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import Hero from "../ui/Hero";
import ProductCard from "../ui/ProductCard";
import { getAllProducts } from "../utils/helpers";
import Slider from "react-slick";
import Collection from "../ui/Collection";
import TopProduct from "../ui/TopProduct";
import PopularProduct from "../ui/PopularProduct";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import HomeShippping from "../ui/HomeShipping";

export default function Home() {
    const { addItemToCart } = useContext(CartContext);

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
            <HomeShippping />
            <div className="m-auto max-w-[1200px]">
                <Slider {...settings}>
                    <Collection
                        name="Mobile"
                        image="https://www.bell.ca/Styles/images/img-banner_iPhone15_Pro_Alt-hero.png"
                        category="mobile"
                    />

                    <Collection
                        name="Computers and Laptops"
                        image="https://www.computerhope.com/jargon/c/computer-types.png"
                        category="laptop"
                    />
                    <Collection
                        name="Tablet"
                        image="https://www.stmgoods.com/wp-content/uploads/STM22-Studio-MultiFit-iPad-Air-5th-gen-Pro-3rd-gen-Blue-Quarter-Front.png"
                        category="tablet"
                    />

                    <Collection
                        name="Audio"
                        image="https://rhizmall.pk/wp-content/uploads/2022/12/ezgif.com-gif-maker-50.webp"
                        category="audio"
                    />
                    <Collection
                        name="Accessories"
                        image="https://5.imimg.com/data5/SELLER/Default/2022/8/OO/SC/AZ/155817538/laptop-and-computer-accessories-500x500.png"
                        category="others"
                    />
                </Slider>

                <h3 className="mt-20 mb-10 text-3xl font-bold tracking-tight md:text-5xl">
                    Our Products
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {isLoading && <p>Loading........</p>}
                    {products?.map((product) => {
                        return (
                            <ProductCard
                                key={product._id}
                                image={`http://localhost:8000/${product.image}`}
                                price={product.price}
                                description={product.description}
                                name={product.name}
                                id={product._id}
                                onclick={() =>
                                    addItemToCart({
                                        name: product.name,
                                        id: product._id,
                                        quantity: 1,
                                        image: product.image,
                                        price: product.price,
                                    })
                                }
                            />
                        );
                    })}
                </div>
            </div>
            <div className="relative my-5">
                <a
                    href="https://example.com/main-banner"
                    className="block w-full "
                >
                    <img
                        src="https://www.easternlogica.com/wp-content/uploads/2023/05/Buy-Computer-Laptop-Accessories.png"
                        alt="Main Banner"
                        className="w-full  h-3/6 "
                    />
                </a>
            </div>

            <div className="m-auto max-w-[1200px]">
                <PopularProduct />

                <div className="md:flex justify-between ">
                    <a
                        href="#"
                        className="w-1/2 p-4  text-white text-center  transition duration-300"
                    >
                        <img
                            src="https://img.freepik.com/free-vector/realism-hand-drawn-horizontal-banner_23-2150203461.jpg"
                            alt="Product Image"
                            className=" w-full h-full object-cover"
                        />
                    </a>
                    <a
                        href="#"
                        className="w-1/2 p-4  text-white text-center duration-300"
                    >
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6q11vT3PfuLQKHeFIQGyBGrIFyXSOhp_ENRO2FMG-iVCdIk4OFoxvvFnMD7OUX3MNsGc&usqp=CAU"
                            alt="Product Image"
                            className=" h-full w-full object-cover"
                        />
                    </a>
                </div>
                <TopProduct />
            </div>

            <Footer />
        </>
    );
}
