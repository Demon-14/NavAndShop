import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import CartItem from './cartItem'  
import {car} from './ARShop'
import '../Components/ARShop.css'

export default function Cart(props) {
    var sum=0
    props.items.map((item)=>{
        sum+=parseInt(item.price)*car[item.id]
    })
    console.log(sum)
  return (
    <div className='cartbg'>
    {props.items.map((item)=>{
        return(
        car[item.id]!=0?<CartItem data={item} cartItem={car} total={sum}/>:console.log("hi")
        )
    })}
    <div className='pay-btn'>
    <button className='mx-3 btn btn-primary' ><Link to = '/qr-page' style={{color : 'wheat', textDecoration : 'none'}}>{`Pay:${sum}`}</Link></button>
    </div>
    </div>
  )
}