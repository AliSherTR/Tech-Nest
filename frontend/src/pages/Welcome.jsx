// import { Link } from "react-router-dom";
import Logo from "../ui/Logo";
export default function Welcome() {
    return (
        <div className="h-screen grid grid-cols-2">
            <div className="flex flex-col pt-5 ps-5 text-white gradient-1">
                <Logo />
                <div className="flex-1 flex flex-col justify-center">
                    <h1>Quote</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aperiam cupiditate illo maiores eveniet optio expedita
                        ut, tempore minima facilis quidem dicta impedit
                        repellendus porro rerum quaerat nobis consequatur
                        perferendis laboriosam?
                    </p>
                </div>
            </div>

            <div className="self-center flex items-center justify-center gap-4">
                <button>Sign Up</button>
                <button>Log In</button>
            </div>
        </div>
    );
}
