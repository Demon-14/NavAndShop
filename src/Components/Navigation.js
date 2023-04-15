import React from 'react'
import { Route } from 'react-router'

export default function Navigation() {
  return (
    <div>
      <Route exact path="/map.html" render={() => {window.location.href="map.html"}} />
    </div>
  )
}
