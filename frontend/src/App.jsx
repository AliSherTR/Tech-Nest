import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import AuthenticationLayout from "./ui/AuthenticationLayout";
import SignIn from "./pages/SignIn";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { AuthProvider } from "./context/authContext";
import ProtectedRoute from "./utils/ProtectedRoute";
import GoogleSignin from "./ui/GoogleSignin";
import AdminLayout from "./ui/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Users from "./pages/admin/Users";
import Products from "./pages/admin/Products";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60 * 1000,
            // staleTime: 0,
        },
    },
});

export default function App() {
    return (
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools initialIsOpen={false} />
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <ProtectedRoute>
                                    <Home />
                                </ProtectedRoute>
                            }
                        />
                        <Route path="/welcome" element={<Welcome />} />
                        <Route
                            path="/authentication"
                            element={<AuthenticationLayout />}
                        >
                            <Route path="signin" element={<SignIn />} />
                            <Route path="signup" element={<SignUp />} />
                            <Route
                                path="google-sigin"
                                element={<GoogleSignin />}
                            />
                        </Route>
                        <Route path="/admin" element={<AdminLayout />}>
                            <Route path="dashboard" element={<Dashboard />} />
                            <Route path="users" element={<Users />} />
                            <Route path="products" element={<Products />} />
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
            </QueryClientProvider>
        </AuthProvider>
    );
}
