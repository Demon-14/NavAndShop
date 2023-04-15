import QRCode from 'react-qr-code';
import React from 'react'

export default function QRPage() {
  return (
    <div>
      <QRCode  
        title="title"
        value="abcd"
        bgColor="white"
        fgcolor="black"
        // level="level"
        size={100}
        />
    </div>
  )
}
