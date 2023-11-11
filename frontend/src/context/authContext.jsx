import { createContext, useReducer } from "react";

const initialState = {
    user: null,
};

const authReducer = (state, action) => {
    switch (action.type) {
        case "SIGNUP":
            return { ...state, user: action.payload };
        case "SIGNIN":
            return { ...state, user: action.payload };
        default:
            return state;
    }
};

// creating an auth context
export const AuthContext = createContext();

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

    return (
        <AuthContext.Provider value={{ state, handleSignUp, handleLogin }}>
            {children}
        </AuthContext.Provider>
    );
};
