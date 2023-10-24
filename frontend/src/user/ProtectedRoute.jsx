import { Route, Navigate } from "react-router-dom";

export default function ProtectedRoute({
    element,
    isAuthenticated,
    redirectTo,
    ...props
}) {
    if (isAuthenticated) {
        return <Route {...props} element={element} />;
    } else {
        return <Navigate to={redirectTo} />;
    }
}
