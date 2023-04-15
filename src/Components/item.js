import React from 'react'
import image from '../images/item.png'

export default function item(props) {
  return (
    <div>
        <div class="card mx-3" style={{"width": "18rem"}}>
  <img src={image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.data.name}</h5>
    <p class="card-text">Price:{props.data.price}</p>
    <a href="#" class="btn btn-primary my-3 mx-3">Add to cart</a>
    <a href="#" class="btn btn-primary">AR</a>
  </div>
</div>
    </div>
  )
}
