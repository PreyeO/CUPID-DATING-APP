import React from 'react'
import Data from '../Components/Data/Data'
import { AiOutlineClose } from 'react-icons/ai'
import { useNavigate} from 'react-router-dom'


const Users = () => {

  const navigate = useNavigate();

  const navigateToHome = () => {
    
    navigate('/');
  };
  return (
    <>
    <div className='users'>
      <div className='buttons'>
      <button onClick={navigateToHome}>
        <AiOutlineClose/>
      </button>
      </div>
    <h4>Meet Our Elites</h4>
   <Data />
   </div>
  </>
  )
}

export default Users
