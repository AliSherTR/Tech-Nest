import Slider from "react-slick";
import { FaHeart } from "react-icons/fa";
export default function TopProduct({
    id,
    children,
    image,
    name,
    description,
    price,
}) {
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

    return (
        <div className="m-auto max-w-[1200px] my-6 p-6 gap-3 ">
            <h2 className=" text-3xl pb-1">Sale Products</h2>

            <div className="flex items-center my-4">
                <div className="w-full h-px bg-black"></div>
            </div>
            <Slider {...settings}>
                <div className="border w-full h-full">
                    <div className=" relative border">
                        <img
                            src="https://plutonstore.com/wp-content/uploads/2022/09/iphone_14_pro_max_gold_pdp_image_position-1a_avail__en-in-removebg-preview.png"
                            alt="Product Image"
                            className="w-full h-64"
                        />
                        <div className="p-4 ">
                            <h2 className="font-semibold text-lg mb-2">
                                Apple Iphone 14
                            </h2>
                            <p className="text-gray-700 mb-2 line-clamp-2">
                                Mobile
                            </p>
                            <div className="flex items-center">
                                <p className="text-gray-500 line-through mr-2 font-bold">
                                    92000
                                </p>
                                <p className=" font-bold text-red-700  text-xl">
                                    56000
                                </p>
                            </div>
                        </div>
                        <div className="p-4">
                            <span className="inline-block bg-red-500 text-white px-2 py-1 rounded-full uppercase text-xs font-bold tracking-wide top-3 right-2 absolute">
                                Sale
                            </span>
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
                </div>
            </Slider>
        </div>
    );
}
