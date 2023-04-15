import React from 'react'
import Item from './item'

export default function ARShop(props) {
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
