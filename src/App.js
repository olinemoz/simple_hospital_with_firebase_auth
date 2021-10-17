import React, {useState} from "react";
import './App.css';
import {Button} from "react-bootstrap";
import initializeFirebaseAuthentication from "./Firebase/firebase.init";
import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";


initializeFirebaseAuthentication()

function App() {
    const [user, setUser] = useState({})
    const auth = getAuth();
    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user)
                setUser(result.user)
            })
    }

    return (
        <div>
            <h1>Welcome All Care Hospital</h1>
            <Button variant="secondary" onClick={signInUsingGoogle}>Google Sign In</Button>
        </div>
    );
}

export default App;
