 import React from 'react'
 import logo from '../images/logo.webp'
 import { Link } from 'react-router-dom';
 import './style.css';


 export default function Navbar() {
   return (
     <nav>
        <a href='#' className='logo'>
        <Link to='/'>
           <h1 className='text-2xl lg:text-[28px] font-semibold leading-none mb-6 mt-6 pl-[-25px]'>Aadya Ventures.</h1>
         </Link>
        </a>
         <input className='menu-btn' type='checkbox' id='menu-btn'></input>
          <label className='menu-icon'>
         <span className='nav-icon'></span>
         </label>
         <ul className='menu'>
             <Link to='/'><li><a href='#' className='active'>Home</a></li></Link>
             <li><a href='#'>About</a></li>
             <li><a href='#'>property</a></li>
             <li><a href='Contact'>Contact</a></li>
       </ul>

        
 </nav>
  )
 }
 
 
 
