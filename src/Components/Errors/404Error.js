import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='error'>
      <h1>Oops!</h1>
      <h4>404 - PAGE NOT FOUND</h4>
      <Link to="/"><button>GO TO HOMEPAGE</button></Link>
    </div>
  )
}

export default ErrorPage
