import React,{useState} from 'react'
import Item from './item'
import '../Components/ARShop.css'
import { cartItems } from './item'

export default function ARShop(props) {
  var count = 0
  for (const prop in cartItems) {
    count += cartItems[prop];
  }
  return (
    <>
    <button style={{'position':'relative','left':'1470px'}}><i className="fa" style={{'font-size':'30px'}}>&#xf07a;</i>
<span className='badge badge-warning' id='lblCartCount'>{count}</span></button>
    <div className='container d-flex'>
    {props.items.map((item)=>{
      return(
      <>
      <Item data={item}/>
      </>
      )
    })}
    </div>
    </>
  )
}
