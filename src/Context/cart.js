import { createContext, useContext, useEffect, useState } from "react";
export const Cart = createContext();

function CartContext(props) {
  var car = { 1: 0, 2: 0, 3: 0 };
  const [cartItems, setCart] = useState(car);
  return (
    <Cart.Provider value={{ cartItems, setCart }}>
      {props.children}
    </Cart.Provider>
  );
}

export default CartContext;
