import {React, useState } from 'react'
import logo from '../assets/logo-white.svg'
import linkedin from '../assets/linkedin.svg'
import instagram from '../assets/instagram.svg'
import github from '../assets/github.svg'
import twitter from '../assets/twitter.svg'
import hamburguer from '../assets/hamburger.svg'
import xmark from '../assets/xmark.svg'
import './css/Navbar.css'

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [color, setColor] = useState(false);

  // Change background color on scroll
  const changeBackground = () => {
    if(window.scrollY >= 90){
      setColor(true);
    }else{
      setColor(false);
    }
  };
  window.addEventListener('scroll', changeBackground);

  // Change menu on click
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className={color?'scrolled':''}>
      <a href='/'><img className='logo' src={logo} alt='wanghley'/></a>
      <div className='menu'>
        <ul id='navbar' className={clicked?"#navbar active":"#navbar"}>
          <li className='menu-item'><a href='/about'>About</a></li>
          <li className='menu-item'><a href='/CV'>CV</a></li>
          <li className='menu-item'><a href='/portfolio'>Portfolio</a></li>
          <li className='menu-item'><a href='/blog'>Blog</a></li>
          <li className='menu-item'><a href='/contact'>Contact</a></li>
        </ul>
        <ul className='menu-social'>
        <li className='menu-item-social'><img alt='linkedin' src={linkedin}/></li>
        <li className='menu-item-social'><img alt='instagram' src={instagram}/></li>
        <li className='menu-item-social'><img alt='github' src={github}/></li>
        <li className='menu-item-social'><img alt='twitter' src={twitter}/></li>
      </ul>
      </div>
      <div className='menu-mobile'>
        <img id='bar' alt='menu' src={clicked?xmark:hamburguer} onClick={handleClick}/>
      </div>
    </nav>
  )
}
export default Navbar