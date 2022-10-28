import React from 'react'
import { Link } from 'react-router-dom'

const Button = () => {
  return (
    <div className='button'>
      <Link to="/"><button>BACK</button></Link>
    </div>
  )
}

export default Button
