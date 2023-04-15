import React from 'react'
import '../fun.css'
import { Link } from 'react-router-dom'
function ShopOptions() {
  return (
    <div>
        <div className='dropdown'>
        <label className='brands'>
            <h5>Select Outlet.</h5>
            <select className='brands-options'>
                <option value="octave">Octave</option>
                <option value="allensolly">Allen Solly</option>
                <option value="louisphillips">Louis Phillips</option>
            </select>
        </label>
        </div>
        <div className="wrapper-fun">
      <button className='fun-buy'><Link to='/ARShop'>Purchase</Link></button>
      <button className='fun-nav'>Navigate</button>
      </div>

    </div>
  )
}

export default ShopOptions