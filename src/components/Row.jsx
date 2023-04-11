import axios from 'axios'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import React, {useState, useEffect} from 'react'
import Movie from './Movie'

const   Row = ({fetchUrl, title, rowId}) => {

      

  

       useEffect(() => {
         axios.get(fetchUrl).then((res) =>{
          setMovies(res.data.results)
         })
             
       }, [fetchUrl])


      const [movies, setMovies] = useState([])

     
      console.log(movies);

      const slideLeft = () =>{
        var slider = document.getElementById('slider'  + rowId)
        slider.scrollLeft -= 200
      }

      const slideRight = () =>{
        var slider = document.getElementById('slider' + rowId)
        slider.scrollLeft += 200
      }


  return (
    <>
      <h1 className='text-sm font-bold md:text-xl p-4'>{title}</h1>
       <div   className='relative flex items-center group '>


            <MdChevronLeft className='bg-gray-300 rounded-[50%] text-3xl  justify-center items-center text-black absolute opacity-50 hover:opacity-100 cursor-pointer left-3 top-12 z-10 hidden group-hover:block'  onClick={slideLeft}></MdChevronLeft>

          <div id={'slider' + rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scrollbar-hide scroll-smooth '>
        {
            movies.map(movie => (
              <Movie movie={movie}></Movie>
            )) 
              }
          </div>

          <MdChevronRight className='bg-gray-300 rounded-[50%] text-3xl justify-center items-center text-black absolute opacity-50 hover:opacity-100 cursor-pointer z-10 right-3 top-12 hidden group-hover:block' onClick={slideRight}></MdChevronRight>



        </div>



     
    </ >
  )
}

export default Row