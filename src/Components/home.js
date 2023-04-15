import React,{useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function Home() {
  const [code,setCode]=useState('')
  const codeChange=(e)=>{
    setCode(e.target.value)
    console.log(e.target.value)
  }
  return (
    <div>
      <h1 className='Header'>Nav&Shop</h1>
      <h3 className='tagline'>Navigate, Try and Shop.</h3>
      <h4 className='mall-code'>enter mallcode</h4>
      <input type="text" className="mall-code-input" onChange={codeChange}/>
      <button className="submit-button" type='submit' ><Link to='/option' state={{c : code }}>Submit</Link></button>
    </div> 
  )
}


