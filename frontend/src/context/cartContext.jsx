import { createContext, useState } from "react";

// Create the Cart Context
export const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([
        {
            image: "https://appleshop.com.pk/wp-content/uploads/2023/06/mba15-midnight-gallery1.jpeg",
            name: "Apple MacBook Pro 2016",
            quantity: 1,
            pricePerItem: 370000,
        },
        {
            image: "https://appleshop.com.pk/wp-content/uploads/2023/06/mba15-midnight-gallery1.jpeg",
            name: "Vivo V20",
            quantity: 5,
            pricePerItem: 2500,
        },
        {
            image: "https://appleshop.com.pk/wp-content/uploads/2023/06/mba15-midnight-gallery1.jpeg",
            name: "Air Pods 3rd gen",
            quantity: 1,
            pricePerItem: 1500,
        },
        {
            image: "https://appleshop.com.pk/wp-content/uploads/2023/06/mba15-midnight-gallery1.jpeg",
            name: "Ram 4gb DDr4",
            quantity: 1,
            pricePerItem: 5000,
        },
    ]);

    const addItemToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const removeItemFromCart = (itemId) => {
        setCartItems(cartItems.filter((item) => item.id !== itemId));
    };
    const getTotalCartPrice = () => {
        // Calculate the total cart price
        const total = cartItems.reduce((acc, item) => {
            return acc + item.quantity * item.pricePerItem;
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
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
