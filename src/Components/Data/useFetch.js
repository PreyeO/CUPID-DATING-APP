import axios from 'axios'
import { useEffect, useState } from 'react';


const useFetchData = (url) => {

  const[data, setData] = useState([])
  const[isLoading, setIsLoading] = useState(false)
  const[error, setError] = useState("")

  useEffect(() =>{
    const fetchData = async() => {

      try{
        setIsLoading(true)
      let result= await axios.get(url);
      setData(result.data.results);
      setIsLoading(false);
    }catch(error) {
    setError(error.message)
    }
  
  };
  fetchData()
  },[] );

  return {data, isLoading, error}
    
}

export {useFetchData}
