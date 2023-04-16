import React,{useState} from 'react'
import { useContext } from 'react'
import Item from './item'
import '../Components/ARShop.css'
import { Link } from 'react-router-dom'


var car = {1 : 0, 2 : 0, 3 : 0}
export default function ARShop(props) {
  const [cartItems,setCart]=useState(car);
  const [val,setVal]=useState(0)
  car=cartItems
  var count = 0
  for (const prop in cartItems) {
    count += cartItems[prop];
  }
  return (
    <>
    <Link to='/cart' style={{'position':'relative','left':'1470px'}}><i className="fa" style={{'font-size':'30px'}}>&#xf07a;</i>
<span className='badge badge-warning' id='lblCartCount'>{val}</span></Link>
    <div className='container d-flex'>
    {props.items.map((item)=>{
      return(
      <>
      <Item data={item} val={val} setVal={setVal} cartItems={cartItems} setCart={setCart}/>
      </>
      )
    })}
    </div>
    </>
  )
}
export {car}
