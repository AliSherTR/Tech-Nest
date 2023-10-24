import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../user/authSlice";
import {
    AppleLoginButton,
    GoogleLoginButton,
    MicrosoftLoginButton,
} from "react-social-login-buttons";
import toast from "react-hot-toast";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSignIn = async (e) => {
        e.preventDefault();
        const user = {
            email,
            password,
        };
        try {
            const response = await axios.post(
                "http://localhost:8000/api/users/login",
                user
            );
            const { token, username, email } = response.data;
            dispatch(setUser({ token, username, email }));
            navigate("/");
            toast.success("Welcome to the Tech Nest");

            localStorage.setItem("token", token);
        } catch (error) {
            toast.error(
                error.response.data.message.replace(/\b\w/g, (char) =>
                    char.toUpperCase()
                )
            );
        }
        setPassword("");
    };

    useEffect(function () {
        const token = localStorage.getItem("token");
        if (token) {
            dispatch(setUser({ token }));
            navigate("/");
        }
    });

    return (
        <form className="mx-auto max-w-[1200px] w-full px-7  md:w-[30%]  flex flex-col gap-4">
            <input
                type="email"
                placeholder="Email"
                className="auth-input-box"
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
                onClick={handleSignIn}
            >
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
