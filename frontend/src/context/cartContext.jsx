import { createContext, useState } from "react";
import toast from "react-hot-toast";

// Create the Cart Context
export const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (item) => {
        setCartItems([...cartItems, item]);
        toast.success("Added to cart");
    };
    const removeItemFromCart = (itemId) => {
        setCartItems(cartItems.filter((item) => item.id !== itemId));
    };

    const updateItemQuantity = (itemId, quantityChange) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId
                    ? { ...item, quantity: item.quantity + quantityChange }
                    : item
            )
        );
    };

    const getTotalCartPrice = () => {
        // Calculate the total cart price
        const total = cartItems.reduce((acc, item) => {
            return acc + item.quantity * item.price;
        }, 0);

        return total;
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addItemToCart,
                removeItemFromCart,
                clearCart,
                getTotalCartPrice,
                updateItemQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
