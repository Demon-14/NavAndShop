import QRCode from 'react-qr-code';
import React from 'react'
import {car} from './ARShop'
import '../Components/qr.css'
import './login.css'

export default function QRPage() {
  return (
    <div className='funbg'>
      <QRCode className='qr'  
        title="title"
        value={'http://localhost:3000/qr-page'}
        bgColor="white"
        fgcolor="black"
        // level="level"
        size={300}
        />
    </div>
  )
}
