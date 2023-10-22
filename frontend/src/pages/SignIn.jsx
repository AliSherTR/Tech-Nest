import { Link } from "react-router-dom";
import {
    AppleLoginButton,
    GoogleLoginButton,
    MicrosoftLoginButton,
} from "react-social-login-buttons";

export default function SignIn() {
    return (
        <form className="mx-auto max-w-[1200px] w-full px-7  md:w-[30%]  flex flex-col gap-4">
            <input
                type="email"
                placeholder="Email"
                className="auth-input-box "
            />
            <input
                type="password"
                placeholder="Password"
                className="auth-input-box"
            />

            <button className="self-center px-5 py-2 w-48 bg-green-300 rounded-full text-center">
                Continue
            </button>

            <p className="self-center">
                {`Don't`} have an account?{" "}
                <Link to="/authentication/signup" className=" underline">
                    Sign Up{" "}
                </Link>
            </p>

            <div className="w-full relative flex items-center gap-2  opacity-10 uppercase text-black font-bold">
                <hr className="border border-black w-1/2" />
                <p>or</p>
                <hr className="border border-black w-1/2" />
            </div>

            <GoogleLoginButton onClick={() => alert("Hello")} />
            <MicrosoftLoginButton onClick={() => alert("Hello")} />
            <AppleLoginButton />
        </form>
    );
}
