import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Navigation from "./Components/Navigation";
import ARShop from "./Components/ARShop";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/home";
import Option from "./Components/option";
import Funzone from "./Components/funzone";
import Foodcourt from "./Components/foodcourt";
import ShopOptions from "./Components/shop-options";
import QRPage from "./Components/qr-page";
import LoginCard from "./Components/LoginCard";
import Landing from "./Components/Landing";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BuyGameTickets from "./Components/buy-game-tickets";

function App() {
  const list = [
    {
      id: 1,
      name: "Pants",
      price: "100",
      Gender: "Men",
      Colour: "Black",
    },
    {
      id: 2,
      name: "Shirt",
      price: "200",
      Gender: "Women",
      Colour: "Black",
    },
    {
      id: 3,
      name: "jeans",
      price: "300",
      Gender: "Children",
      Colour: "Black",
    }
  ];
  const games = [
    {
      id: 1,
      name: "bowling",
      price: "100/20shots",
    },
    {
      id: 2,
      name: "air hockey",
      price: "100 for 30mins",
    },
    {
      id: 3,
      name: "snooker",
      price: "200 for 30mins",
    },
  ];
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Landing />}></Route>
          <Route exact path="" element={<Landing></Landing>}></Route>
          <Route exact path="/mallcode" element={<Home />}></Route>
          <Route exact path="/navigation" element={<Navigation />}></Route>
          <Route exact path="/arshop" element={<ARShop items={list} />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/option" element={<Option />}></Route>
          <Route exact path="/funzone" element={<Funzone />}></Route>
          <Route exact path="/foodcourt" element={<Foodcourt />}></Route>
          <Route
            exact
            path="/buy-game-tickets"
            element={<BuyGameTickets items={games} />}
          ></Route>
          <Route exact path="/shop-options" element={<ShopOptions />}></Route>
          <Route exact path="/qr-page" element={<QRPage />}></Route>
          <Route exact path="/map"></Route>
          <Route exact path="/LoginCard" element={<LoginCard />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
