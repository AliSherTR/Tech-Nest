import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { useGoogleLogin } from "@react-oauth/google";
import GoogleLogInButton from "../ui/GoogleButton";
import { useForm } from "react-hook-form";
import FormError from "../ui/FormError";
export default function SignIn() {
    const { handleLogin } = useAuth();
    const navigate = useNavigate();

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
                    "http://localhost:8000/api/users/auth/login",
                    formData
                );
                return res.data;
            } catch (error) {
                throw error.response.data;
            }
        },
        onSuccess: (data) => {
            handleLogin(data);
            toast.success("Logged In");
            navigate("/");
        },
        onError: (error) => {
            const errorMessage = error.error.message || "An error occurred";
            toast.error(errorMessage);
        },
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
                })}
            />
            <FormError
                errorMessage={errors?.password?.message}
                additionalClass="mt-[-13px]"
            />
            <button
                className="self-center px-5 py-2 w-48 bg-green-300 rounded-full text-center"
                type="submit"
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
            <GoogleLogInButton text="Login With Google" handler={googleLogin} />
        </form>
    );
}
