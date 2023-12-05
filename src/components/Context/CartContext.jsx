/* eslint-disable react/prop-types */
// CarritoContext.js
import { createContext, useContext, useState } from "react";

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const addToCart = (book, quantity) => {
    setCarrito((prevCarrito) => {
      const existingBook = prevCarrito.find((item) => item.id === book.id);

      if (existingBook) {
        return prevCarrito.map((item) =>
          item.id === book.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCarrito, { ...book, quantity }];
      }
    });
  };

  return (
    <CarritoContext.Provider value={{ carrito, addToCart }}>
      {children}
    </CarritoContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCarrito = () => {
  return useContext(CarritoContext);
};
