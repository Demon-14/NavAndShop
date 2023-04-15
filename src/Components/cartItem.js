import React from 'react'
import image from '../images/item.png'

export default function cartItem(props) {
  return (
    <>
    <div class="card mb-3 mx-3 my-3" style={{'max-width': '540px'}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={image} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{props.data.name}</h5>
        <p class="card-text">{`Price:${props.data.price}`}</p>
        {/* {console.log(props.cartItem)} */}
        <p class="card-text">{`Qty:${props.cartItem[props.data.id]}`}</p>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
