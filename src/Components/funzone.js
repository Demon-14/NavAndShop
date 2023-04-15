import React from 'react'
import '../fun.css'
import { Link } from 'react-router-dom'
function funzone() {
  return (
    <div>
        <div className="wrapper-fun">
      <button className='fun-buy'><Link to='/buy-game-tickets'>Buy Tickets</Link></button>
      <button className='fun-nav'>Navigate</button>
      </div>

    </div>
  )
}

export default funzone
