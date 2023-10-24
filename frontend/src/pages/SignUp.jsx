import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import {
    AppleLoginButton,
    GoogleLoginButton,
    MicrosoftLoginButton,
} from "react-social-login-buttons";

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");

    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        const newUser = {
            email,
            username: userName,
            password,
        };

        try {
            await axios.post("http://localhost:8000/api/users/auth", newUser);
            console.log("new User Created");
            navigate("/authentication/signin");
        } catch (error) {
            toast.error(
                error.response.data.message.replace(/\b\w/g, (char) =>
                    char.toUpperCase()
                )
            );
        }
    };

    return (
        <form className="mx-auto max-w-[1200px] w-full px-7  md:w-[30%]  flex flex-col gap-4">
            <input
                type="text"
                placeholder="Full Name"
                className="auth-input-box "
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                className="auth-input-box "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                className="auth-input-box"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button
                className="self-center px-5 py-2 w-48 bg-green-300 rounded-full text-center"
                onClick={handleSignUp}
            >
                Continue
            </button>

            <p className="self-center">
                Already have an account?
                <Link to="/authentication/signin" className=" underline">
                    Log in
                </Link>
            </p>

            <div className="w-full relative flex items-center gap-2  opacity-10 uppercase text-black font-bold">
                <hr className="border border-black w-1/2" />
                <p>or</p>
                <hr className="border border-black w-1/2" />
            </div>

            <GoogleLoginButton />
            <MicrosoftLoginButton />
            <AppleLoginButton />
        </form>
    );
}
