import React from 'react'
import SavedShows from '../../components/SavedShows'
import Movie from '../../Images/movie3.webp' 

const Account = () => {
  return (
    <>
    <div className='w-full text-white pt-[5rem] '>
    <img className='absolute top-0 left-0  w-full h-[200px] sm:h-[400px] object-cover'  src={Movie} alt="/" />
  

    <div className='bg-black/60 fixed top-0 left-0 w-full h-[400px]'></div>
    <div className='absolute top-[10%] p-4 md:p-8 '> 
    <h1 className='text-3xl md:text-5xl font-bold mt-[3rem] ' >My Shows </h1>
    </div>
     
    </div>
   <div className=' mt-[200px] sm:mt-[350px]'>
     <SavedShows ></SavedShows>
   </div>
   
    </>
  )
}

export default Account 