import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';



const auth = getAuth(app);

export const AuthContext = createContext();
const AuthProvider  = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleLogIn = (googleProvider) =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const githubLogIn = (githubProvider) =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider);
    }

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const logInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => signOut(auth);

   

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
            setLoading(false);
        })
        return () => unsubscribe();
    },[])


    return (
        <AuthContext.Provider value={{googleLogIn, loading, githubLogIn, user, createUser, logInUser, logOut}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider ;