import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = () => {

  const navigate = useNavigate();

  const navigateToHome = () => {
    
    navigate('/');
  };
  return (
    <div className='button'>
      <button onClick={navigateToHome}>BACK</button>
    </div>
  )
}

export default Button
