import {useEffect, useState} from 'react';
import {
    getAuth,
    signOut,
    onAuthStateChanged,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth";


const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
            //     .then((result) => {
            //         setUser(result.user)
            //     }).catch((error) => {
            //     setError(error.message)
            // })
            .finally(() => {
                setIsLoading(false)
            })
    }

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
        }).catch((error) => {
            setError(error.message)
        }).finally(() => {
            setIsLoading(false)
        })
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribed
    }, [auth])


    return {
        user,
        setError,
        error,
        isLoading,
        signInUsingGoogle,
        logOut
    }
};

export default useFirebase;