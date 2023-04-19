import React, { createContext } from 'react';
import {getAuth, signInWithPopup} from 'firebase/auth';
import app from '../firebase/firebase.config';



const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider  = ({children}) => {

    const googleLogIn = (googleProvider) =>{
        return signInWithPopup(auth, googleProvider);
    }

    const githubLogIn = (githubProvider) =>{
        return signInWithPopup(auth, githubProvider);
    }


    return (
        <AuthContext.Provider value={{googleLogIn, githubLogIn}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider ;