import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect, useState } from "react";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] =useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth,initializeUser);
        return unsubscribed;
    },[])

    async function initializeUser(user) {
        if(user){
            setCurrentUser({ ...user });
        }else{
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
        setLoading(false);
    }
    const value = {
        currentUser,
        userLoggedIn,
        loading
    }
    return (
        <AuthContext.Provider value ={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}