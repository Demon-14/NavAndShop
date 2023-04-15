import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Navigation from './Components/Navigation';
import ARShop from './Components/ARShop';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/home';
import Option from './Components/option';
import Funzone from './Components/funzone'
import Foodcourt from './Components/foodcourt';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const list=[{
    id:1,
    name:'Pants',
    price:'100'
  },
  {
    id:2,
    name:'Shirt',
    price:'200'
  },
  {
    id:3,
    name:'jeans',
    price:'300'
  }
  ]
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route exact path='/home' element={<Home/>}></Route>
      <Route exact path='/navigation' element={<Navigation/>}></Route>
      <Route exact path='/arshop' element={<ARShop items={list}/>}></Route>
      <Route exact path='/about' element={<About/>}></Route>
      <Route exact path='/contact' element={<Contact/>}></Route>
      <Route exact path='/option' element={<Option/>}></Route>
      <Route exact path='/funzone' element={<Funzone/>}></Route>
      <Route exact path='/foodcourt' element={<Foodcourt/>}></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
