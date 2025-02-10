import React, { useState } from "react";
import { styles } from "../service/style";
import { useCart } from "../context/CartContext"; // ✅ Importa useCart

const ItemCount = ({ stock = 10, initial = 1, product }) => {
  const [count, setCount] = useState(initial);
  const { addToCart } = useCart(); // ✅ Usa el contexto del carrito

  const handleIncrement = () => {
    if (count < stock) setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: count, // ✅ Asegurar que aquí se envía `count`
      image: product.image,
    });
    // console.log("Agregando al carrito:", { ...product, quantity: count });
    // addToCart({ ...product, quantity: count });
  };

  return (
    <div style={styles.container}>
      <div style={styles.counterContainer}>
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

        <span style={styles.counter}>{count}</span>

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

      <button style={styles.addButton} onClick={handleAddToCart}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;