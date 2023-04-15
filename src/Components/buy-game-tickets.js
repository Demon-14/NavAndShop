import React from 'react'
import Item from './games-props'

export default function BuyGameTickets(props) {
  return (
    <>
    <div></div>

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