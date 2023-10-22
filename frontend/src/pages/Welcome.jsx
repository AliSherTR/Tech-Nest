import { Link } from "react-router-dom";
export default function Welcome() {
    return (
        <div className="h-screen grid md:grid-cols-2">
            <div className="hidden md:flex flex-col pt-5 ps-5 pe-5 text-white gradient-1">
                <h1 className="font-semibold font-montserrat text-white text-2xl uppercase cursor-pointer ">
                    Tech Nest
                </h1>
                <div className="flex-1 md:flex flex-col justify-center ">
                    <h1 className=" font-montserrat font-bold text-3xl mb-4">
                        From Big Ones to small tech gadgets
                    </h1>
                    <p className="text-xl font-montserrat font-medium ">
                        You have come to the right place! Here you can find any
                        of your favourite gadgtes all at the same place
                    </p>
                </div>
            </div>

            <div className="self-center flex md:flex-row flex-col items-center justify-center gap-4">
                <Link
                    to="/authentication/signup"
                    className="px-5 py-2 w-48 bg-green-300 rounded-full text-center"
                >
                    Sign Up
                </Link>
                <Link
                    to="/authentication/signin"
                    className="px-5 py-2 w-48 bg-green-300 rounded-full text-center"
                >
                    Log In
                </Link>
            </div>
        </div>
    );
}
