import React,{createContext,useEffect,useState} from 'react'
import { onAuthStateChanged} from 'firebase/auth'
import { auth } from '../firebase'

export const AuthContext = createContext()


const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        })
    },[])
     if(loading){
         return <div style={{position:'fixed',top:'50%',left:'50%',transform:'translate(-50%,-50%)',fontSize:'20px',fontWeight:'bold'}}>loading...</div>
     }
    return (<AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>  )
}
export default AuthProvider