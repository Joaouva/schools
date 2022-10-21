import React from 'react'
import HeaderBanner from "../../assets/images/header.png"
import "./style.scss"

export default function Header() {
  return (
    <div className='header-container'>
      <img src={HeaderBanner} alt="draft with kids smiling"/>
    </div>
  )
}
