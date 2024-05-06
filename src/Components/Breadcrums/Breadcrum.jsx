import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/right-arrow.png'
export const Breadcrum = (props) => {
  const {product}=props;
  return (
    <div className='breadcrum'>
      HOME <img style={{width:'10px', height:"10px"}} src={arrow_icon} alt="" /> SHOP <img style={{width:'10px', height:"10px"}} src={arrow_icon} alt="" /> {product.category} <img style={{width:'10px', height:"10px"}} src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}
