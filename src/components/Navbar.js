import {React, Component } from 'react'
import logo from '../assets/logo-white.svg'
import linkedin from '../assets/linkedin.svg'
import instagram from '../assets/instagram.svg'
import github from '../assets/github.svg'
import twitter from '../assets/twitter.svg'
import hamburguer from '../assets/hamburger.svg'
import xmark from '../assets/xmark.svg'
import './css/Navbar.css'
// import { navLinks } from '../constants'

class Navbar extends Component{
  state = {clicked:false};

  handleClick = () => {
    this.setState({clicked:!this.state.clicked})
  };

  render(){
  return (
    <nav>
      <a href='/'><img className='logo' src={logo} alt='wanghley'/></a>
      <div className='menu'>
        <ul id='navbar'>
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
        <img id='bar' alt='menu' src={this.state.clicked?xmark:hamburguer} onClick={this.handleClick}/>
      </div>
    </nav>
  )
}
}
export default Navbar