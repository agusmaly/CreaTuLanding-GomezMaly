// import React, { useState } from "react";
// import { styles } from "../service/style";
// import { useCart } from "../context/CartContext"; // ✅ Importa useCart

// const ItemCount = ({ stock = 10, initial = 1, product }) => {
//   const [count, setCount] = useState(initial);
//   const { addToCart } = useCart(); // ✅ Usa el contexto del carrito

//   const handleIncrement = () => {
//     if (count < stock) setCount(count + 1);
//   };

//   const handleDecrement = () => {
//     if (count > 1) setCount(count - 1);
//   };

//   const handleAddToCart = () => {
//     addToCart({ ...product, quantity: count });
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.counterContainer}>
//         <button
//           style={{
//             ...styles.button,
//             ...(count === 1 ? styles.disabledButton : {}),
//           }}
//           onClick={handleDecrement}
//           disabled={count === 1}
//         >
//           -
//         </button>

//         <span style={styles.counter}>{count}</span>

//         <button
//           style={{
//             ...styles.button,
//             ...(count === stock ? styles.disabledButton : {}),
//           }}
//           onClick={handleIncrement}
//           disabled={count === stock}
//         >
//           +
//         </button>
//       </div>

//       <button style={styles.addButton} onClick={handleAddToCart}>
//         Agregar al carrito
//       </button>
//     </div>
//   );
// };

// export default ItemCount;




// import { useCart } from "../context/CartContext";

// const ItemCount = ({ item, stock = 10, initial = 1 }) => {
//   const { addToCart } = useCart();
//   const [count, setCount] = useState(initial);

//   const handleIncrement = () => {
//     if (count < stock) setCount(count + 1);
//   };

//   const handleDecrement = () => {
//     if (count > 1) setCount(count - 1);
//   };

//   return (
//     <div>
//       <button onClick={handleDecrement} disabled={count === 1}>-</button>
//       <span>{count}</span>
//       <button onClick={handleIncrement} disabled={count === stock}>+</button>

//       <button onClick={() => addToCart({ ...item, quantity: count })}>
//         Agregar al carrito
//       </button>
//     </div>
//   );
// };

// export default ItemCount;



import React, { useState } from "react";
import { styles } from "../service/style";

const ItemCount = ({ stock = 10, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  // Funciones para incrementar y decrementar
  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div style={styles.container}>

      <div style={styles.counterContainer}>
        {/* Botón de Decrementar */}
        <button
          style={{
            ...styles.button,
            ...(count === 1 ? styles.disabledButton : {}),
          }}
          onClick={handleDecrement}
          disabled={count === 1}
        >
          -
        </button>

        {/* Contador */}
        <span style={styles.counter}>{count}</span>

        {/* Botón de Incrementar */}
        <button
          style={{
            ...styles.button,
            ...(count === stock ? styles.disabledButton : {}),
          }}
          onClick={handleIncrement}
          disabled={count === stock}
        >
          +
        </button>
      </div>

      {/* Botón de Agregar al carrito */}
      <button style={styles.addButton} onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
