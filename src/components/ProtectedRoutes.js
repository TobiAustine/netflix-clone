import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const ProtectedRoutes = ({children}) => {

        const {user} = UserAuth()


    if(!user){
        return <Navigate to='/'></Navigate>
    }else{
        return children
    }


 
}

export default ProtectedRoutes