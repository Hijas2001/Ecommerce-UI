import React, { useContext, useRef } from 'react'
import './Navbar.css'

import { useState } from 'react';

import logo from "../Assets/logo_1.jpg"
import cart_icon from "../Assets/carts.png"
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/chevron.png'

import Search from '../Search/Search';
import search_icon from '../Assets/search (2).png'

export const Navbar = () => {

  const [menu, setMenu] = useState("shop");
  const { getTotelCartItems } = useContext(ShopContext)
  const menuRef = useRef()

  const dropdown_togle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle('open');
  }

  return (
    <div className='navbar'>

      {/* <Search search_icon={search_icon}></Search> */}

      <div className="nav-logo">
        <img className='logo' src={logo} alt="" />
        <p>StyleStreet</p>
      </div>

      <img className='nav-dropdown' onClick={dropdown_togle} src={nav_dropdown} alt="" />

      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu === "shop" ? <hr /> : null}</li>
        <li onClick={() => { setMenu("mens") }}><Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>{menu === "mens" ? <hr /> : null}</li>
        <li onClick={() => { setMenu("womens") }}><Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link>{menu === "womens" ? <hr /> : null}</li>
        <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : null}</li>
      </ul>

      <div className="nav-login-cart">

        {localStorage.getItem('auth-token')
          ? <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}>Logout</button>
          : <Link to='/login'><button >Login</button></Link>}

        <Link to='/cart'><img className='logo' src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotelCartItems()}</div>
      </div>

    </div>

  )
}
