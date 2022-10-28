import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import HomeForm from '../Components/Forms/HomeForm'

const HomePage = () => {

  return (
    <div className='home-page'>
 
       <NavBar />
       <h4>START <span className='span-two'>free</span> TODAY</h4>
       <main>
      <HomeForm />
      </main>
      <footer>
        <h5>&copy; 2022 Preye Omusuku(P<span className='footer-span'>Dev</span>), All rights reserved</h5>
      </footer>
    </div>
  )
}

export default HomePage
