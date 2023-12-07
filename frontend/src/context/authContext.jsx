import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useEffect, useReducer } from "react";
import { Navigate } from "react-router-dom";

const initialState = {
    user: null,
};

const authReducer = (state, action) => {
    switch (action.type) {
        case "SIGNUP":
            return { ...state, user: action.payload };
        case "SIGNIN":
            return { ...state, user: action.payload };
        case "SETUSER":
            return { ...state, user: action.payload };

        default:
            return state;
    }
};

// creating an auth context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    const handleSignUp = (userData) => {
        dispatch({ type: "SIGNUP", payload: userData });
    };

    const handleLogin = (userData) => {
        dispatch({ type: "SIGNIN", payload: userData });
        const { token } = userData;
        localStorage.setItem("token", token);
    };

    const fetchUserData = async () => {
        const token = localStorage.getItem("token");
        if (!token) return;
        const decoded = jwtDecode(token);
        try {
            const data = await axios.get(
                `http://localhost:8000/api/users/${decoded.id}`
            );
            dispatch({ type: "SETUSER", payload: data.data });
        } catch (error) {
            <Navigate to={"/authentication/signin"} replace />;
        }
    };
    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <AuthContext.Provider value={{ state, handleSignUp, handleLogin }}>
            {children}
        </AuthContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
    return useContext(AuthContext);
}
