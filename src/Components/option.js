import React from 'react'
import './options.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
export default function option() {

  return (
    <div>
      <div className='wrapper-option'>
      <button className="submit-button-game" type='submit' ><Link to='/funzone'>Funzone</Link></button>
      <button className="submit-button-food" type='submit' ><Link to='/foodcourt'>Food</Link></button>
      <button className="submit-button-shop" type='submit' ><Link to='/contact'>Shop</Link></button>
      </div>
    </div>
  )
}
