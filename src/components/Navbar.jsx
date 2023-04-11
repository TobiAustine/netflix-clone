import React from 'react'
import { NavLink ,useNavigate} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {


        const navigate = useNavigate()

      const {user, logOut} =  UserAuth()

      console.log(user);

      const signOut = async() =>{
          try {
              await logOut(user)
              navigate('/')
          } catch (error) {
            console.log(error);
          }
      }


  return (
    <div className='text-white flex items-center justify-between p-4 z-[100] absolute w-full '>
      <h1 className='text-red-600 text-3xl font-bold cursor-pointer'> <NavLink to='/'>METFLIX</NavLink> </h1>
  

         {
           !user?.email ? 
           
           <div>
        <button className='pr-2'> <NavLink to='/signin'>Sign In</NavLink>  </button>
        <button className='bg-red-600 rounded p-1 cursor-pointer '> <NavLink to='signup'>Sign Up</NavLink> </button>
         </div>  :
         
         
         <div>
           <button className='pr-2'> <NavLink to='/myaccount'>Account</NavLink>  </button>

        <button className='bg-red-600 rounded p-1 cursor-pointer' onClick={signOut} >Log Out </button>
       
         </div> 

         

          
        } 
 
    
    
    </div>
  )
}

export default Navbar