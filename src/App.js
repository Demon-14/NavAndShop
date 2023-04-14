import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Navigation from './Components/Navigation';
import ARShop from './Components/ARShop';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/home';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route exact path='/home' element={<Home/>}></Route>
      <Route exact path='/navigation' element={<Navigation/>}></Route>
      <Route exact path='/arshop' element={<ARShop/>}></Route>
      <Route exact path='/about' element={<About/>}></Route>
      <Route exact path='/contact' element={<Contact/>}></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
