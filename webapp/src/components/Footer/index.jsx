import React from 'react'
import "./style.scss"

export default function Footer() {


const year = new Date().getFullYear()

  return (
    <div className='footer-container'>
      <p>Made with ❤️<br/>João Uva {year}</p>
      </div>
  )
}
