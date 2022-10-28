import React from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {

  const navigate = useNavigate();

  const navigateToHome = () => {
  
    navigate('/');
  };
  return (
    <div className='error'>
      <h1>Oops!</h1>
      <h4>404 - PAGE NOT FOUND</h4>
      <button onClick={navigateToHome }>GO TO HOMEPAGE</button>
    </div>
  )
}

export default ErrorPage
