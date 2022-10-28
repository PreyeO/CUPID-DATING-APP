import React from 'react'
import Data from '../Components/Data/Data'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'


const Users = () => {
  return (
    <>
    <div className='users'>
      <div className='buttons'>
      <Link to="/"><button>
        <AiOutlineClose/>
      </button></Link>
      </div>
    <h4>Meet Our Elites</h4>
   <Data />
   </div>
  </>
  )
}

export default Users
