import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    AppleLoginButton,
    MicrosoftLoginButton,
} from "react-social-login-buttons";
import { useAuth } from "../context/authContext";
import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export default function SignIn() {
    const { handleLogin } = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });

    const responseMessage = (response) => {
        const { credential } = response;

        const decodedCredentials = jwtDecode(credential);
        console.log(decodedCredentials);
        const user = {
            email: decodedCredentials.email,
            username: decodedCredentials.name,
        };

        handleLogin(user);
        navigate("/");
    };
    const errorMessage = (error) => {
        console.log(error);
    };

    const mutation = useMutation({
        mutationFn: async (formData) => {
            const res = await axios.post(
                "http://localhost:8000/api/users/auth/login",
                formData
            );
            return res.data;
        },
        onSuccess: (data) => {
            handleLogin(data);
            toast.success("Logged In");
            navigate("/");
        },
        onError: (err) => {
            toast.error("An error occured during the process", err);
        },
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        mutation.mutate(formData);
        setFormData({ email: "", password: "" });
    };

    return (
        <form className="mx-auto max-w-[1200px] w-full px-7  md:w-[30%]  flex flex-col gap-4">
            <input
                type="email"
                placeholder="Email"
                className="auth-input-box"
                value={formData.email}
                onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                }
            />
            <input
                type="password"
                placeholder="Password"
                className="auth-input-box"
                value={formData.password}
                onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                }
            />

            <button
                className="self-center px-5 py-2 w-48 bg-green-300 rounded-full text-center"
                onClick={handleFormSubmit}
            >
                Continue
            </button>

            <p className="self-center">
                {`Don't`} have an account?{" "}
                <Link to="/authentication/signup" className=" underline">
                    {" "}
                    Sign Up
                </Link>
            </p>

            <div className="w-full relative flex items-center gap-2  opacity-10 uppercase text-black font-bold">
                <hr className="border border-black w-1/2" />
                <p>or</p>
                <hr className="border border-black w-1/2" />
            </div>

            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
            <MicrosoftLoginButton
                onClick={() => alert("Sorry its a work in progress")}
            />
            <AppleLoginButton
                onClick={() => alert("Sorry its a work in progress")}
            />
        </form>
    );
}
