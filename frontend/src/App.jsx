import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/authContext";
import { QueryClient, QueryClientProvider } from "react-query";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import AuthenticationLayout from "./ui/AuthenticationLayout";
import SignIn from "./pages/SignIn";
// import { ReactQueryDevtools } from "react-query/devtools";
import ProtectedRoute from "./utils/ProtectedRoute";
import GoogleSignin from "./ui/GoogleSignin";
import AdminLayout from "./ui/AdminLayout";
import AdminDashboard from "./pages/admin/Dashboard";
import AddProductsPage from "./pages/admin/AddProductsPage";
import SellerDashboard from "./pages/Seller/Dashboard";
import AdminUsers from "./pages/admin/Users";
import AdminProducts from "./pages/admin/Products";
import SellerLayout from "./ui/SellerLayout";
import SellerProducts from "./pages/Seller/Products";
import DeleteProductsPage from "./pages/admin/DeleteProductsPage";
import UpdateProductsPage from "./pages/admin/UpdateProductsPage";
import ProductPage from "./pages/ProductPage";
import Checkout from "./pages/Checkout";
import ShippingForm from "./pages/ShippingForm";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60 * 1000,
        },
    },
});

export default function App() {
    return (
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
                {/* <ReactQueryDevtools initialIsOpen={false} /> */}
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/welcome" element={<Welcome />} />
                        <Route
                            path="/authentication"
                            element={<AuthenticationLayout />}
                        >
                            <Route index element={<SignIn />} />
                            <Route path="signup" element={<SignUp />} />
                            <Route
                                path="google-sigin"
                                element={<GoogleSignin />}
                            />
                        </Route>

                        <Route path="/product/:id" element={<ProductPage />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/shipping" element={<ShippingForm />} />

                        <Route
                            path="/admin"
                            element={
                                <ProtectedRoute>
                                    <AdminLayout />
                                </ProtectedRoute>
                            }
                        >
                            <Route index element={<AdminDashboard />} />
                            <Route path="users" element={<AdminUsers />} />
                            <Route
                                path="products/add"
                                element={<AddProductsPage />}
                            />
                            <Route
                                path="products/delete"
                                element={<DeleteProductsPage />}
                            />
                            <Route
                                path="products/update/:id"
                                element={<UpdateProductsPage />}
                            />
                            <Route
                                path="products/"
                                element={<AdminProducts />}
                            />
                        </Route>

                        <Route
                            path="/seller"
                            element={
                                <ProtectedRoute>
                                    <SellerLayout />
                                </ProtectedRoute>
                            }
                        >
                            <Route index element={<SellerDashboard />} />

                            <Route
                                path="products"
                                element={<SellerProducts />}
                            />
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
