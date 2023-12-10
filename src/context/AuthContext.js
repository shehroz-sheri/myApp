import React, { createContext, useContext } from 'react'


export const FirebaseContext = createContext()

export const FirebaseProvider = props => {
    return (
        <FirebaseContext.Provider value={{}}>
            {props.children}
        </FirebaseContext.Provider>
    )
}

export const useAuthContext = () => useContext(FirebaseContext)