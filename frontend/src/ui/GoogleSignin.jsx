import axios from "axios";
import { useState } from "react";
import { useMutation } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import toast from "react-hot-toast";

export default function GoogleSignin() {
    const { handleSignUp } = useAuth();
    const location = useLocation();
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    // const { name, email } = location.state;
    // console.log(name, email);

    // const mutation = useMutation({
    //     mutationFn: async () => {
    //         try {
    //             await axios.post(
    //                 "http://localhost:8000/api/users/auth/register",
    //                 {
    //                     username: name,
    //                     email,
    //                     password,
    //                 }
    //             );
    //         } catch (error) {
    //             console.error("BIG BIG ERROR");
    //         }
    //     },
    //     onSuccess: (data) => {
    //         handleSignUp(data);
    //     },
    //     onError: (error) => {
    //         toast.error(error.message);
    //     },
    // });

    // function handleFormSubmit(e) {
    //     e.preventDefault();
    //     mutation.mutate();
    // }

    return (
        <div className=" w-96 max-w-xl mx-auto py-8 px-3 rounded-lg bg-green-300">
            <p className=" text-white ">Create a strong password</p>
            <form action="">
                <input
                    type="password"
                    className=" auth-input-box w-full mt-3"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </form>
        </div>
    );
}
