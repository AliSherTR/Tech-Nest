import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { useMutation } from "react-query";
import { useAuth } from "../context/authContext";
import axios from "axios";
import toast from "react-hot-toast";
import MicrosoftLogin from "react-microsoft-login";

import GoogleLogInButton from "../ui/GoogleButton";

export default function SignUp() {
    const { handleSignUp, handleLogin } = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            const { access_token } = tokenResponse;
            try {
                const res = await axios.get(
                    `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`
                );
                const { name, email } = res.data;
                const user = await axios.post(
                    "http://localhost:8000/api/users/auth/google-login",
                    {
                        username: name,
                        email,
                        googleSignIn: true,
                    }
                );
                handleLogin(user.data);
                navigate("/");
            } catch (error) {
                toast.error("Erorr while signing in");
            }
        },
    });

    const authHandler = async (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const res = await data;
            console.log(res);
        }
    };

    const mutation = useMutation({
        mutationFn: async (formData) => {
            try {
                const res = await axios.post(
                    "http://localhost:8000/api/users/auth/login",
                    formData
                );
                return res.data;
            } catch (error) {
                throw error.response.data;
            }
        },
        onSuccess: (data) => {
            handleSignUp(data);
            toast.success("successfully saved the user");
            navigate("/authentication/signin");
        },
        onError: (err) => {
            toast.error(err.error.message);
        },
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        mutation.mutate(formData);
        setFormData({
            username: "",
            email: "",
            password: "",
        });
    };

    return (
        <form className="mx-auto max-w-[1200px] w-full px-7  md:w-[30%]  flex flex-col gap-4">
            <input
                type="text"
                placeholder="Full Name"
                className="auth-input-box"
                value={formData.username}
                onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                }
            />
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

            <GoogleLogInButton
                text="Continue With Google"
                handler={googleLogin}
            />
            <MicrosoftLogin
                clientId={"1abd395d-13ef-4677-b18f-15e52a69edd7"}
                authCallback={() => {
                    authHandler();
                }}
                className=" w-full"
                redirectUri="http://localhost:5173"
                withUserData={true}
                prompt="select_account"
            />
        </form>
    );
}
