import React,{useState} from 'react'
import Item from './item'
import '../Components/ARShop.css'

export default function ARShop(props) {
  return (
    <>
    <button style={{'position':'relative','left':'1470px'}}><i className="fa" style={{'font-size':'30px'}}>&#xf07a;</i>
<span className='badge badge-warning' id='lblCartCount'>10</span></button>
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
