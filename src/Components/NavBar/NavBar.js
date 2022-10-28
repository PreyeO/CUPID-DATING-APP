
import { AiOutlineBars, AiOutlineClose} from "react-icons/ai"
import React,{ useRef } from 'react'


const NavBar = () => {

const navRef = useRef()

const showNavBar = () => {
 navRef.current.classList.toggle("responsive-nav") 
 
}
  return (
    <header>
   
      <div className='logo'>
        <a href="/"><h3>cUp<span>ID</span></h3></a>
      </div>
      <nav ref={navRef}>
      
          <a href="/">Home</a>
          <a href='/about'>About</a>
          <a href='/users'>Users</a> 
          <a href='/chatbox'>ChatBox</a>
          <a href='/signup'>SignUp</a>
         
      <button onClick={showNavBar} className='nav-btn' id='close-btn'>
          <AiOutlineClose />
        </button>
      </nav>
      <button onClick={showNavBar} className='nav-btn' >
       

        <AiOutlineBars />
      </button>
    </header>
  )
}

export default NavBar
