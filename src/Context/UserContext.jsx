import { createContext, useState } from "react";



export const UserContext = createContext()

export const UserProvider = ({children}) =>{
    const [user, setUser] = useState({
        email: "buenas@gmail.com",
        token: "8970"
    })
    return(
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    )
}
