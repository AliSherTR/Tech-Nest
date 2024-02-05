import { Link, useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/authContext";
import axios from "axios";
import toast from "react-hot-toast";
import GoogleLogInButton from "../ui/GoogleButton";
import FormError from "../ui/FormError";

export default function SignUp() {
    const { handleSignUp, handleLogin } = useAuth();
    const navigate = useNavigate();

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

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const mutation = useMutation({
        mutationFn: async (formData) => {
            try {
                const res = await axios.post(
                    "http://localhost:8000/api/users/auth/register",
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

    const handleFormSubmit = (data) => {
        mutation.mutate(data);
        reset();
    };

    return (
        <form
            className="mx-auto max-w-[1200px] w-full px-7  md:w-[30%]  flex flex-col gap-4"
            onSubmit={handleSubmit(handleFormSubmit)}
        >
            <input
                type="text"
                placeholder="Full Name"
                className="auth-input-box"
                {...register("username", {
                    required: "User name is required",
                    maxLength: {
                        value: 20,
                        message: "User Name should not exceed 20 characters",
                    },
                    pattern: {
                        value: /^[A-Za-z\s]+$/,
                        message:
                            "User Name should only contain letters and spaces",
                    },
                })}
            />
            <FormError
                errorMessage={errors?.username?.message}
                additionalClass="mt-[-13px]"
            />
            <input
                type="email"
                placeholder="Email"
                className="auth-input-box"
                {...register("email", {
                    required: "Email is required",
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email",
                    },
                })}
            />
            <FormError
                errorMessage={errors?.email?.message}
                additionalClass="mt-[-13px]"
            />
            <input
                type="password"
                placeholder="Password"
                className="auth-input-box"
                {...register("password", {
                    required: "Password is required",
                    minLength: {
                        value: 8,
                        message:
                            "Password length should be atleast 8 characters",
                    },
                    pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                        message:
                            "Password must contain at least one lowercase letter, one uppercase letter, and one digit.",
                    },
                })}
            />
            <FormError
                errorMessage={errors?.password?.message}
                additionalClass="mt-[-13px]"
            />
            <button
                type="submit"
                className="self-center px-5 py-2 w-48 bg-green-300 rounded-full text-center"
            >
                Continue
            </button>

            <p className="self-center">
                Already have an account?
                <Link to="/authentication" className=" underline">
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
        </form>
    );
}
