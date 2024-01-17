import React from 'react'
import logo from '../assets/noon-logo-en.svg'
import uae_logo from '../assets/ae.svg'
import alarbia from '../assets/alarbia.png'
import login from '../assets/user_thin.svg'
import wishlist from '../assets/wishlist.svg'
import cart from '../assets/cart.svg'

const navbar = () => {
  return (
    <div>
     <header>
    <div className="header-nav">
    <div className="container-big">
        <div className="row">
            <div className="logo">
                <a href="#">
                    <img src={logo} />
                </a>
            </div>
            <div className="uae-logo">
                <div className="flag">
                    <img src={uae_logo} />
                </div>
                <div className="deliverto">
                    <span>Deliver to</span>
                    <span>Unnamed Road - Baluchistan...
                    </span>
                </div>
            </div>
            <div className="searchbar">
                <input type="text" placeholder="What are you looking for?" />
            </div>
            <div className="alarbia">
                <img src={alarbia} />
            </div>
            <div className='loginsignup'>
                <div className='loginarea'>
                    Login <img src={login} />
                </div>
                <div className='loginarea'>
                    Wishlist <img src={wishlist} />
                </div>
                <div className='loginarea'>
                    Cart <img src={cart} />
                </div>
            </div>
        </div>
        </div>    
    </div>    
    <div className='main-menu'>
        <ul>
        <li>
          <a href="#">ALL CATEGORIES</a>
        </li>
        <li>
          <a href="#">ELECTRONICS</a>
        </li>
        <li>
          <a href="#">MEN</a>
        </li>
        <li>
          <a href="#">WOMEN</a>
        </li>
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">BEAUTY & FRAGNANCE</a>
        </li>
        <li>
          <a href="#">BABY</a>
        </li>
        <li>
          <a href="#">TOYS</a>
        </li>
        <li>
          <a href="#">SPORTS</a>
        </li>
        <li>
          <a href="#">HEALTH & NUTRITION</a>
        </li>
        <li>
          <a href="#">BEST SELLERS</a>
        </li>
        </ul>
    </div>
    </header> 
    </div>
  )
}

export default navbar
