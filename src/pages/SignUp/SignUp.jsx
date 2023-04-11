import React, {useState} from 'react'
import Movie from '../../Images/movie3.webp' 
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'


const SignUp = () => {

    const navigate = useNavigate()
  const {user, signUp} = UserAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

     const changeEmail = (e) =>{
         setEmail( e.target.value)
     } 

     const changePassword = (e) =>{
          setPassword(e.target.value)
     }

     const handleSubmit =  async(e) =>{
            e.preventDefault()

            try {
              await signUp(email, password)
              navigate('/')
              setEmail('')
              setPassword('')
            } catch (error) {
              console.log(error);
            }

     } 



  return (
    <>
    <div className='w-full h-screen relative'  >
       
      <img className='hidden sm:block  w-full h-full object-cover absolute'  src={Movie} alt="/" />
      
       <div className='bg-black/60 absolute w-full h-full top-0 left-0 '></div>

      <div className='fixed w-full px-4 py-24 z-50'>

        <div className='max-w-[450px] h-[500px] mx-auto bg-black/75 text-white  ' >
        <div className='max-w-[320px] mx-auto py-16'>
          <h1 className='text-3xl font-bold text-center mx-auto'>Sign Up</h1>



          <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
            <input type="email" placeholder='Email' className='w-[80%] rounded-sm p-2 mx-auto mt-4 outline-none text-black bg-gray-600 '  value={email} onChange={changeEmail} autoComplete='email' required />

            <input type="password" placeholder='Password' className='w-[80%] rounded-sm p-2 mx-auto mt-4 outline-none text-black bg-gray-600 '  autoComplete='current-password' onChange={changePassword}  required/>

            <button type="submit" className='bg-red-700  rounded-sm p-2 mt-5 w-[80%] mx-auto font-bold' >Sign Up</button>

            <div className='flex items-center justify-between mt-3 w-[80%] mx-auto text-gray-500'>
              <p className='flex items-center'><input type="checkbox" className='mr-1' />Remember me</p>
              <p>Need Help?</p>
             

            </div> 
            
            <p className='text-center text-gray-500 mt-5'>Already have an account? <Link to='/signin' className='underline text-white/95'>Sign In</Link></p>
          </form>
      
      </div>       

        </div>

      </div>




      
    </div>
    </>
  )
}

export default SignUp