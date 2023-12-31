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
      <a href='/'><img className='logo lazyload' src={logo} alt='wanghley'/></a>
      <div className='menu'>
        <ul id='navbar' className={clicked?"#navbar active":"#navbar"}>
          <li className='menu-item'><a href='/about'>About</a></li>
          <li className='menu-item'><a href='/CV'>CV</a></li>
          <li className='menu-item'><a href='/portfolio'>Portfolio</a></li>
          <li className='menu-item'><a href='/blog'>Blog</a></li>
          <li className='menu-item'><a href='/contact'>Contact</a></li>
        </ul>
        <ul className='menu-social'>
        <li className='menu-item-social'><a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/wanghley/'><img alt='linkedin' src={linkedin}/></a></li>
        <li className='menu-item-social'><a target='_blank' rel="noreferrer" href='https://instagram.com/wanghley'><img alt='instagram' src={instagram}/></a ></li>
        <li className='menu-item-social'><a target='_blank' rel="noreferrer" href='https://github.com/Wanghley'><img alt='github' rel="noreferrer" src={github}/></a></li>
        <li className='menu-item-social'><a target='_blank' rel="noreferrer" href='https://twitter.com/wanghley'><img alt='twitter' src={twitter}/></a></li>
      </ul>
      </div>
      <div className='menu-mobile'>
        <img id='bar' alt='menu' src={clicked?xmark:hamburguer} onClick={handleClick}/>
      </div>
    </nav>
  )
}
export default Navbar