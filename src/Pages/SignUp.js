import React from 'react'
import { Link } from 'react-router-dom'
import HomeForm from '../Components/Forms/HomeForm'
import { AiOutlineClose } from 'react-icons/ai'

const SignUp = () => {
  return (
    <div className='signup'>

     <div className='buttons'>
      <Link to="/"><button>
        <AiOutlineClose/>
      </button></Link>
      </div>
      <div className='buttn'>
     
      <HomeForm />
      </div>
    
    </div>
  )
}

export default SignUp
