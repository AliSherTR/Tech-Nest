import Slider from "react-slick";
import { FaHeart } from "react-icons/fa";
export default function TopProduct({
    id,
    children,
    image,
    name,
    category,
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
        <div className="m-auto max-w-[1200px] my-6 p-6 gap-3">
            <h2 className=" text-3xl font-bold pb-5 ">Sale Products</h2>
            <Slider {...settings}>
                <div className=" slider-container">
                    <div className="bg-white shadow-md rounded-lg overflow-hidden transition duration-200 hover:translate-y-0.5 hover:shadow-lg relative h-full max-w-md w-[300px]">
                        <img
                            src={
                                "https://images.samsung.com/is/image/samsung/p6pim/bd/sm-a057flvhbkd/gallery/bd-galaxy-a05s-sm-a057-sm-a057flvhbkd-thumb-539556309?$344_344_PNG$"
                            }
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
                            <p className="text-gray-900 font-bold">370000</p>
                        </div>
                        <div className="p-4">
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
