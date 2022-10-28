
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Components/Button/Button'



const About = () => {

  const navigate = useNavigate();

  const navigateToSignup = () => {
    
    navigate('/signup');
  };
  return (
    <>
    
    <div className='about'>


          <h3>Are you tired of using the phrase <span className='span-three'>"GOD WHEN!!!" </span>?</h3>
          <p>At <span className='span'>cUpID,</span> we have more singles who are more your style.</p>
          <p><span className="span-four">20,000 </span>singles world wide and <span className="span-four">1 million </span>messages sent daily</p>
          <p className='mingle'>Lets get you to mingle...</p>
          <div className='btns'>
          <Button />
          <button onClick={navigateToSignup}>Get Started</button>
          </div>
      </div>
      </>
  )
}

export default About
