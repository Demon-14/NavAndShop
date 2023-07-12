import { createContext, useContext,useEffect,useState } from "react";
export const Cart=createContext();

function CartContext(props) {
    var car = { 1: 0, 2: 0, 3: 0 };
    const [cartItems, setCart] = useState(car);
    const value={cartItems,setCart}
  return (
    <Cart.Provider value={value}>
        {props.children}
    </Cart.Provider>
  )
}

export default CartContext