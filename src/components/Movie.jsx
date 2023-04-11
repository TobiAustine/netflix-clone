import React, {useState} from 'react'
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'
import { arrayUnion, doc, updateDoc   } from 'firebase/firestore'

const Movie = ({movie, }) => {

  const {user} = UserAuth()

    const [like,setLike] = useState(false)

    const changeLike = () =>{
        setLike(!like)
    }
 
    const [saved,setSaved] = useState(false)

    const movieId = doc(db, 'Users', `${user?.email}`)

    const saveShow = async() =>{
         if(user?.email){
             changeLike()
           setSaved(true)
           await updateDoc(movieId, {
             savedShows :arrayUnion({
               id: movie?.id,
               title: movie?.title,
               img: movie?.backdrop_path

             })
           })
         }else{
           alert('Please log in to save a movie')
         }
    }


   



  return (
    <div key={movie.id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2' >
                <img className='rounded-sm w-full object-cover' src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`} alt={movie.title} />
                 
                <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80   opacity-0 hover:opacity-100  text-white'>

                  <p className='p-3 whitespace-normal text-xs md:text-sm lg:text-lg flex justify-center items-center text-center h-full w-full'>{movie?.title}</p>

                <p onClick={saveShow}>
                {
                  like ? (<FaHeart    className='absolute top-4 left-4 cursor-pointer text-gray-300'></FaHeart> ):( <FaRegHeart className='absolute top-4 left-4 cursor-pointer text-gray-300'></FaRegHeart>)
                }

                </p>
                 
 
                </div>
              </div>
  )
}

export default Movie