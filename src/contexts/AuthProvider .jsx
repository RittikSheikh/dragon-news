import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';



const auth = getAuth(app);

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorType, setErrorType] = useState(null);

    const googleLogIn = (googleProvider) => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const githubLogIn = (githubProvider) => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider);
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => signOut(auth);

    const updateUserProfile = (name, photoUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl
        })
    }

    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser)
            }
            setLoading(false);
        })
        return () => unsubscribe();
    }, [])


    return (
        <AuthContext.Provider value={{
            googleLogIn, loading, verifyEmail, githubLogIn,
            user, createUser, logInUser, logOut,
            updateUserProfile, setLoading,
            errorType, setErrorType
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;