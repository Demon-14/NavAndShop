import React, { useState } from 'react'
import image from '../images/item.png'
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

var cartItems = {1 : 10, 2 : 0, 3 : 0}

const Item=(props)=>{

  
  const [val,setVal]=useState(1)
  const Addbtn=(event)=>{
    // console.log(document.getElementById(event.target.id))
    document.getElementById(event.target.id).style.display='none'
    document.getElementById(`a${event.target.id}`).style.display='block'
    cartItems[props.data.id] += 1
    console.log(cartItems)
  }
  const addVal=(event)=>{
    setVal(val+1)
    cartItems[props.data.id] += 1
    console.log(cartItems)
  }
  const subVal=(event)=>{
    setVal(val-1)
    cartItems[props.data.id] -= 1
    console.log(cartItems)
  }
  return (
    <div>

        <div class="card my-3 mx-3" style={{"width": "18rem"}}>
  <img src={image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.data.name}</h5>
    <p class="card-text">Price:{props.data.price}</p>
    <button id={`addcart${props.data.id}`} className='btn btn-primary' onClick={Addbtn}>Add to cart</button>
    <div id={`aaddcart${props.data.id}`} style={{display:'none'}}><button className='btn btn-primary'><AiOutlineMinus onClick={subVal}/></button>{val}<button className='btn btn-primary'><AiOutlinePlus onClick={addVal} /></button></div>
    </div>
    {/* <a href="#" class="btn btn-primary">AR</a> */}
  </div>
</div>
  )
}
export {cartItems}
export default Item