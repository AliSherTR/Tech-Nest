import { BrowserRouter, Route, Routes } from "react-router-dom";
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
        </BrowserRouter>
    );
}
