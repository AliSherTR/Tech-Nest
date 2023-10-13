import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import WelcomeLayout from "./ui/WelcomeLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Welcome />,
    },
    {
        path: "/login-or-signup",
        element: <WelcomeLayout />,
        children: [
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "signup",
                element: <SignUp />,
            },
        ],
    },
    {
        path: "/home",
        element: <Home />,
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
