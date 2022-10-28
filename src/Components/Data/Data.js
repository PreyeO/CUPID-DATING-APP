import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useFetchData } from './useFetch';




const Data = () => {

const {isLoading,  data} = useFetchData("https://randomuser.me/api/?results=50");


const [pageNumber , setPageNumber] =useState(0)

const dataPerPage = 10;
const pageVisited = pageNumber * dataPerPage;
const displayUsersData = data.slice(pageVisited, pageVisited + dataPerPage)

const pageCounter= Math.ceil(data.length/dataPerPage);

const changePage =({selected}) =>{
  setPageNumber(selected)
 }

  return (
    <>
    <div>
      {isLoading ? 
      <div>
          <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open>
        <CircularProgress color="inherit" />
      </Backdrop></div> :null}</div>

    
      <div className='data-container'>
      
      {data && displayUsersData.map(({name, picture, gender, location,email, dob, phone,}) => (
      
        <div className='cards'>
     
           <div className='data-image'>
            <img src={picture.medium} alt='' />
          </div>
          <div>
          Name{ name.first} - {name.last} {" "}
          </div>
          <div>
             gender{gender}
         </div>
         <div>
          {dob.age}years
        </div>
        <div>
         Email {email}
        </div>
        <div>
         Number {phone}
        </div>
        <div>
        location: {location.state} - {location.country} {" "}
        </div>
        </div>
      ))}
      </div>

      <ReactPaginate
       previousLabel={"Prev"}
       nextLabel ={"Next"}
       pageCount={pageCounter}
       onPageChange={changePage}
       containerClassName={"pagination-btns"}
       previousClassName={"prev-btn"}
       nextClassName={"next-btn"}
       disabledClassName={"disabled-btn"}
       activeClassName={"active-btn"}
       
       
       />
  

  </>
  )
}

export default Data