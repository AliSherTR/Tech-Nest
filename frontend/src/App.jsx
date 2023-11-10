import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import AuthenticationLayout from "./ui/AuthenticationLayout";
import SignIn from "./pages/SignIn";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
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
