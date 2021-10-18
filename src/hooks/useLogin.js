import {useEffect, useState} from 'react';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth";


const useLogin = () => {
    const [user, setUser] = useState({})
    const [getUser, setGetUser] = useState({
        name: "",
        email: "",
        password: "",
    })
    const [isLogin, setIsLogin] = useState(false)
    const [error, setError] = useState("")

    // Destructuring getUser Properties
    const {name, email, password} = getUser
    const auth = getAuth();

    const handleInputChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setGetUser({
            ...getUser,
            [name]: value
        })
    }

    const toggleLogin = event => {
        setIsLogin(event.target.checked)
    }

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user)
            }).catch((error) => {
            setError(error.message)
        })
    }


    const handleRegistration = event => {
        event.preventDefault();
        console.log("HandleRegistration: ", name, email, password, isLogin)
        if (isLogin) {
            userSignIn(email, password)
        } else {
            createUserAccount(email, password)
        }

    }
    const createUserAccount = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                updateUserName()
                console.log("created user account: ", user)
                setError("")
            })
            .catch((error) => {
                setError(error.message)
            });
    }

    const userSignIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("signed in", user)
                setError("")
            })
            .catch((error) => {
                setError(error.message)
            })
    }
    const logOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            setError(error.message)
        })
    }

    const updateUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
        }).catch((error) => {
            setError(error.message)
        })
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
        })
        return () => unsubscribed
    }, [auth])


    return {
        user,
        name,
        email,
        password,
        isLogin,
        toggleLogin,
        error,
        handleInputChange,
        handleRegistration,
        createUserAccount,
        userSignIn,
        signInUsingGoogle,
        logOut
    }
};

export default useLogin;