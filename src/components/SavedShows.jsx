import React, {useState, useEffect} from 'react'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import {AiOutlineClose} from 'react-icons/ai'
import { UserAuth } from '../context/AuthContext'
import {db} from '../firebase'
import { updateDoc, doc, onSnapshot } from 'firebase/firestore'


const SavedShows = () => {
    const [movies, setMovies] = useState([])
    const {user} = UserAuth()

    const slideLeft = () =>{
        var slider = document.getElementById('slider' )
        slider.scrollLeft -= 200
      }

      const slideRight = () =>{
        var slider = document.getElementById('slider')
        slider.scrollLeft += 200
      }

      useEffect(() => {
        onSnapshot(doc(db, 'Users', `${user?.email}`), (doc) =>{
            setMovies(doc.data()?.savedShows)
        })
      }, [user?.email])



      const movieRef = doc(db,'Users', `${user?.email}`)

      const deleteShow = async (passedId) =>{
        try {
            const result = movies.filter((movie) => movie.id !== passedId)
            await updateDoc(movieRef, {
                savedShows: result
            })
        } catch (error) {
            console.log( );
        }
      }


  return (
    <div>
           <h1 className='text-sm font-bold md:text-xl p-4 text-white'>My Favourite Shows</h1>
        <div  className='relative flex items-center group '>


            <MdChevronLeft className='bg-gray-300 rounded-[50%] text-3xl  justify-center items-center text-black absolute opacity-50 hover:opacity-100 cursor-pointer left-3 top-12 z-10 hidden group-hover:block'  onClick={slideLeft}></MdChevronLeft>

          <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scrollbar-hide scroll-smooth '>
        {
            movies?.map((movie, id) => (
                <div key={id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2' >
                <img className='rounded-sm w-full object-cover' src={`https://image.tmdb.org/t/p/w500/${movie?.img}`} alt={movie.title} />

                <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80   opacity-0 hover:opacity-100  text-white'>

                  <p className='p-3 whitespace-normal text-xs md:text-sm lg:text-lg flex justify-center items-center text-center h-full w-full'>{movie?.title}</p>

                  <p className='absolute top-3 right-3 text-gray-300' onClick={() => {deleteShow(movie.id)}}><AiOutlineClose size={20}></AiOutlineClose></p>





                </div>
              </div>
            ))
              }
          </div>

          <MdChevronRight className='bg-gray-300 rounded-[50%] text-3xl justify-center items-center text-black absolute opacity-50 hover:opacity-100 cursor-pointer z-10 right-3 top-12 hidden group-hover:block' onClick={slideRight}></MdChevronRight>



        </div>




    </div>
  )
}

export default SavedShows