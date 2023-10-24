import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import AuthenticationLayout from "./ui/AuthenticationLayout";
import SignIn from "./pages/SignIn";

export default function App() {
    const user = useSelector((state) => state.auth.token !== null);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={user ? <Home /> : <SignIn />} />
                <Route path="/welcome" element={<Welcome />} />
                <Route
                    path="/authentication"
                    element={<AuthenticationLayout />}
                >
                    <Route path="signin" element={<SignIn />} />
                    <Route path="signup" element={<SignUp />} />
                </Route>
            </Routes>
            <Toaster
                position="top-center"
                toastOptions={{
                    success: {
                        duration: 3000,
                    },
                    error: {
                        duration: 5000,
                    },
                    style: {
                        fontSize: "16px",
                        width: "300px",
                        maxWidth: "500px",
                        padding: "10px 24px",
                    },
                }}
            />
        </BrowserRouter>
    );
}
