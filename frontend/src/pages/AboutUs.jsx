import Header from "../ui/Header";
import Footer from "../ui/Footer";
export default function Aboutus() {
    return (
        <>
            <Header />

            <div className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="font-heading mb-4 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest uppercase title-font">
                            Why choose us?
                        </h2>
                        <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
                            About Tech Nest
                        </p>
                        <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                            Welcome to Tech Nest, where innovation meets
                            convenience! At Tech Nest, we're passionate about
                            providing our customers with a seamless and
                            enjoyable shopping experience. As a leading
                            e-commerce website, we strive to redefine the way
                            people shop online by offering a diverse range of
                            products, cutting-edge technology, and exceptional
                            customer service.
                        </p>
                    </div>

                    <div className="mt-10">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU51LdxvTFZuGT8mjBGOvPcDcsBZaHvkpCMw3KYmIlgQ&s" />
                                    </div>
                                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                                        Our Mission
                                    </p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    Our mission at Tech Nest is simple: to make
                                    online shopping accessible, enjoyable, and
                                    hassle-free for everyone. We believe that
                                    technology has the power to transform lives,
                                    and we're dedicated to harnessing that power
                                    to create a platform that caters to the
                                    needs and preferences of our diverse
                                    customer base.
                                </dd>
                            </div>
                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                        <img src="https://icons.veryicon.com/png/o/commerce-shopping/credit-icon/promise-to-keep-promise.png" />
                                    </div>
                                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                                        Our Promise
                                    </p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    {" "}
                                    At Tech Nest, we're committed to providing
                                    our customers with the best possible
                                    shopping experience. From the moment you
                                    visit our website to the delivery of your
                                    order, we strive to exceed your expectations
                                    at every turn. Join us on our journey as we
                                    continue to revolutionize the world of
                                    e-commerce, one satisfied customer at a
                                    time.
                                </dd>
                            </div>
                        </dl>
                    </div>
                    <div>
                        <div className="mt-10">
                            <h2 className="text-2xl pb-2 font-semibold">
                                What Sets Us Apart
                            </h2>
                            <p className="py-2 font-semibold">
                                At Tech Nest, we're not just another e-commerce
                                website – we're a team of dedicated
                                professionals committed to excellence. Here's
                                what sets us apart:
                            </p>
                            <p>
                                <h4 className="font-semibold">
                                    Product Diversity:
                                </h4>
                                <p>
                                    {" "}
                                    From electronics and gadgets to fashion and
                                    home goods, we offer a wide range of
                                    products to suit every taste and budget.
                                </p>
                                <h4 className="font-semibold">
                                    Cutting-Edge Technology:
                                </h4>
                                <p>
                                    Our platform is powered by state-of-the-art
                                    technology, ensuring a seamless and secure
                                    shopping experience for our customers.
                                </p>
                                <h4 className="font-semibold">
                                    Personalized Service:
                                </h4>
                                <p>
                                    We understand that every customer is unique,
                                    which is why we offer personalized
                                    recommendations and tailored shopping
                                    experiences to meet individual needs.
                                </p>
                                <h4 className="font-semibold">
                                    Exceptional Customer Support:
                                </h4>
                                <p>
                                    Our friendly and knowledgeable customer
                                    support team is available to assist you with
                                    any questions or concerns you may have,
                                    ensuring that your experience with Tech Nest
                                    is always a positive one.
                                </p>
                                <h4 className="font-semibold">
                                    Commitment to Innovation:
                                </h4>
                                <p>
                                    We're constantly innovating and evolving to
                                    stay ahead of the curve. Whether it's
                                    implementing new features or improving
                                    existing ones, we're always looking for ways
                                    to enhance the Tech Nest experience.
                                </p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
