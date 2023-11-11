import { createContext, useReducer } from "react";

const initialState = {
    user: null,
};

const authReducer = (state, action) => {
    switch (action.type) {
        case "SIGNUP":
            return { ...state, user: action.payload };

        default:
            return state;
    }
};

// creating a context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    const handleSignUp = (userData) => {
        dispatch({ type: "SIGNUP", payload: userData });
    };

    return (
        <AuthContext.Provider value={{ state, handleSignUp }}>
            {children}
        </AuthContext.Provider>
    );
};
