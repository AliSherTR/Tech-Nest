import { Navigate, useLocation } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
    let location = useLocation();

    const token = localStorage.getItem("token");

    if (!token) {
        console.log(token);
        return (
            <Navigate
                to="/authentication/signin"
                state={{ from: location }}
                replace
            />
        );
    }
    return children;
};

export default ProtectedRoute;
