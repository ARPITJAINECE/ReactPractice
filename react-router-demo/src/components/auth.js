//we will be using this component as for the authenticating the user, so can 
//be used for protecting the Routes related to the profile section in the NavBar

import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const login = user => {
        setUser(user)
    }

    const logout = () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}