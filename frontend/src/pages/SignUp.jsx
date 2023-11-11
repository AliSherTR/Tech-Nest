import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    AppleLoginButton,
    GoogleLoginButton,
    MicrosoftLoginButton,
} from "react-social-login-buttons";
import { useMutation } from "react-query";
import { AuthContext } from "../context/authContext";
import axios from "axios";
import toast from "react-hot-toast";

const signUpUser = async (formData) => {
    await axios.post("http://localhost:8000/api/users/auth/register", formData);
};

export default function SignUp() {
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const mutation = useMutation(signUpUser, {
        onSuccess: (data) => {
            authContext.handleSignUp(data);
            toast.success("successfully saved the user");
            navigate("/authentication/signin");
        },
        onError: (err) => {
            toast.error("An error occured during the sign up process", err);
        },
    });

    const handleSignUp = (e) => {
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
