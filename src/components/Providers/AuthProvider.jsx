import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUuser] = useState('');
    const [loading, setloading] = useState(true);
    
    const createUser = (email, password) =>{
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const signIn = (email, password) =>{
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
       return signOut(auth);
    }

    // observer user auth state
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUuser(currentUser);
            setloading(false);
        });
        return () =>{
            return unsubscribe();
        }
    },[])
    
    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;