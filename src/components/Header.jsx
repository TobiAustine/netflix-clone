import axios from 'axios'
import React, {useState, useEffect} from 'react'
import requests from './requests'

const Main = () => {

    const [movies, setMovies] = useState([])

    

    useEffect(() => {
     axios.get(requests.requestPopular).then((res) =>{
        setMovies(res.data.results) 
        console.log(res.data.results);
     })

    
        
      


    }, [])

    const movie = movies[Math.floor(Math.random()* movies.length)]
    // console.log(movie);

    const truncateString = (str, num) =>{
      if(str?.length > num){
           return str.slice(0, num) + '...read more'
      }else{
        return str
      } 
    }
     

  return (
    <div className='w-screen h-[550px] text-white'>
      

      <div className='w-full h-full'>
         <div className='absolute w-full h-[550px] bg-gradient-to-r from-black' ></div>
     
       
            <img className='h-full w-full  object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} 
            ></img> 
           

            <div className='absolute w-full top-[20%] p-4 md:p-8'>
              <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
              <div className='my-3'>
        <button className='border border-gray-300  bg-gray-300 text-black p-1'>Play</button>
        <button className=' border border-gray-300 ml-2 p-1 '>Watch Later</button>
        </div>


            <p className='text-gray-400 text-sm'>Released: {movie?.release_date}</p>

            <p className='mt-2 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 '>{truncateString(movie?.overview, 200)}</p>


            </div>

           
        
        </div> 







    </div>
  )
}

export default Main