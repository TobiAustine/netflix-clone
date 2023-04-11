import { createContext, useContext, useEffect, useState} from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { setDoc, doc  } from "firebase/firestore"


const AuthContext = createContext()

  

export function UserAuth(){
    return useContext(AuthContext)
}


export function   AuthContextProvider({children}){
            const [user, setUser] = useState({})

         async  function signUp(email, password){
            try {
          await   createUserWithEmailAndPassword(auth, email, password)
         await    setDoc(doc(db, 'Users', email), {
               savedShows:[] 
              })
            } catch (error) {
                console.log(error);
            }} 

            
            
            function signIn(email,password){
                return signInWithEmailAndPassword(auth, email, password)
            }

            function logOut(){
                return signOut(auth, user)
            }   

            useEffect(() => {
              const unsubscribed = onAuthStateChanged(auth, (currentUser) =>{ setUser(currentUser) })

              return () =>{
                    unsubscribed()
              }
            }, )
            





        return(
             <AuthContext.Provider value={{signUp, logOut, signIn, user}} >
                {children}
             </AuthContext.Provider>
        )
}


