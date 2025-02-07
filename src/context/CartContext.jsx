// import { createContext, useContext, useState } from "react";

// // Crear el contexto
// const CartContext = createContext();

// // Hook personalizado para usar el contexto
// export const useCart = () => useContext(CartContext);

// export const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState([]);

//     // Función para agregar al carrito
//     const addToCart = (item) => {
//         setCart((prevCart) => {
//             const itemExist = prevCart.find((prod) => prod.id === item.id);
//             if (itemExist) {
//                 return prevCart.map((prod) =>
//                     prod.id === item.id
//                         ? { ...prod, quantity: prod.quantity + item.quantity }
//                         : prod
//                 );
//             }
//             return [...prevCart, item];
//         });
//     };

//     // Función para eliminar del carrito
//     const removeFromCart = (id) => {
//         setCart((prevCart) => prevCart.filter((item) => item.id !== id));
//     };

//     return (
//         <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//             {children}
//         </CartContext.Provider>
//     );
// };
