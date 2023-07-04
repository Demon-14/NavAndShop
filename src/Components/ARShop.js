import React, { useState } from "react";
import { useContext } from "react";
import Item from "./item";
import "../Components/ARShop.css";
import { Link } from "react-router-dom";
import "../fun.css";

var car = { 1: 0, 2: 0, 3: 0 };
export default function ARShop(props) {
  const [activeButton, setactiveButton] = useState("Men");
  const [cartItems, setCart] = useState(car);
  const [val, setVal] = useState(0);
  car = cartItems;
  var count = 0;
  for (const prop in cartItems) {
    count += cartItems[prop];
  }
  return (
    <div className="funbg">
      <Link to="/cart" style={{ position: "relative", left: "1470px" }}>
        <i className="fa" style={{ "font-size": "30px" }}>
          &#xf07a;
        </i>
        <span className="badge badge-warning" id="lblCartCount">
          {val}
        </span>
      </Link>
      <div className="gender-filter">
        <button onClick={() => setactiveButton("Men")}>Men</button>
        <button onClick={() => setactiveButton("Women")}>Women</button>
        <button onClick={() => setactiveButton("Children")}>Children</button>
      </div>
      <div className="container d-flex">
        {props.items.map((item) => {
          {
            /* console.log(item.Gender); */
          }
          return (
            <>
              {activeButton == "Men" && item.Gender == "Men" && (
                <Item
                  data={item}
                  val={val}
                  setVal={setVal}
                  cartItems={cartItems}
                  setCart={setCart}
                />
              )}
              {activeButton == "Women" && item.Gender == "Women" && (
                <Item
                  data={item}
                  val={val}
                  setVal={setVal}
                  cartItems={cartItems}
                  setCart={setCart}
                />
              )}
              {activeButton == "Children" && item.Gender == "Children" && (
                <Item
                  data={item}
                  val={val}
                  setVal={setVal}
                  cartItems={cartItems}
                  setCart={setCart}
                />
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}
export { car };
