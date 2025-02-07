// import { useCart } from "../context/CartContext";

// const Cart = () => {
//   const { cart, removeFromCart } = useCart();

//   return (
//     <div className="cart">
//       <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Carrito de compras</h2>
//       {cart.length === 0 ? (
//         <p style={{ textAlign: "center" }}>El carrito está vacío.</p>
//       ) : (
//         <ul className="cart-list">
//           {cart.map((item, index) => (
//             <li key={`${item.id}-${index}`} className="cart-item">  // ✅ Se asegura una clave única
//               <span>
//                 {item.name} - {item.quantity} x {item.price}
//               </span>
//               <button className="cart-button" onClick={() => removeFromCart(item.id)}>
//                 X
//               </button>
//             </li>
//           ))}
//         </ul>
//         // <ul className="cart-list">
//         //   {cart.map((item) => (
//         //     <li key={item.id} className="cart-item">
//         //       <span>
//         //         {item.name} - {item.quantity} x {item.price}
//         //       </span>
//         //       <button
//         //         className="cart-button"
//         //         onClick={() => removeFromCart(item.id)}
//         //       >
//         //         X
//         //       </button>
//         //     </li>
//         //   ))}
//         // </ul>
//       )}
//     </div>
//   );
// };

// export default Cart;
