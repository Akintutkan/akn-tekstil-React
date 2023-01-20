import React from 'react'
import { createContext,useState} from 'react'

export const UserContext = createContext({

})

const userProvider = ({children}) =>{
    const [currentUser,setCurrentUser] = useState(null)
    const value = {currebtUser, setCurrentUser}
    return <UserContext.Provider value={} >{children}</UserContext.Provider>
}

