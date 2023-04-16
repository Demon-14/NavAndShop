import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import CartItem from './cartItem'  
import {car} from './ARShop'

export default function Cart(props) {
    var sum=0
    props.items.map((item)=>{
        sum+=parseInt(item.price)*car[item.id]
    })
    console.log(sum)
  return (
    <>
    {props.items.map((item)=>{
        return(
        car[item.id]!=0?<CartItem data={item} cartItem={car} total={sum}/>:console.log("hi")
        )
    })}
    <button className='mx-3 btn btn-primary'><Link to = '/qr-page'>{`Pay:${sum}`}</Link></button>
    </>
  )
}