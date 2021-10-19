import React, {useState} from 'react';
import initializeFirebaseAuthentication from "../../Firebase/firebase.init";
import {Button, Col, Form, Row} from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import {useHistory, useLocation} from "react-router-dom";
import {
    createUserWithEmailAndPassword,
    getAuth, signInWithEmailAndPassword,
    updateProfile
} from "firebase/auth";

initializeFirebaseAuthentication()
const Login = () => {
    const [errors, setErrors] = useState("")
    const [isLogin, setIsLogin] = useState(false)
    const [createdUser, setCreatedUser] = useState({
        name: "",
        email: "",
        password: "",
    })

    const auth = getAuth();

    const {
        user,
        error,
        signInUsingGoogle
    } = useAuth();

    const location = useLocation()
    const history = useHistory()
    const Redirect_URL = location.state?.from || '/home'
    const handleGoogleLogin = () => {
        signInUsingGoogle().then((result) => {
            console.log(result)
            history.push(Redirect_URL)
        })
    }

    const handleInputChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setCreatedUser({
            ...createdUser,
            [name]: value
        })
    }

    const toggleLogin = event => {
        setIsLogin(event.target.checked)
    }


    // Destructuring createdUser Properties
    const {name, email, password} = createdUser
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
                setErrors("")
            })
            .catch((error) => {
                setErrors(error.message)
            });
    }

    const userSignIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("signed in", user)
                setErrors("")
                history.push(Redirect_URL)
            })
            .catch((error) => {
                setErrors(error.message)
            })
    }

    const updateUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
        }).catch((error) => {
            setErrors(error.message)
        })
    }

    return (
        <div style={{marginTop: "75px"}} className="mb-2">
            <Row>
                <Col xs={12} sm={12} md={6} lg={6} className="mx-auto shadow-lg p-4">
                    <h2 className="text-center text-primary">
                        {
                            (user.displayName || user.email) ? "Login" : "Register"
                        }
                    </h2>
                    <Form onSubmit={handleRegistration} className="mx-3 mx-auto">
                        {
                            isLogin || <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder="Enter name"
                                    value={name}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                        }

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={password}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check
                                type="checkbox"
                                name="checkbox"
                                label="Already Have Account?"
                                value={isLogin}
                                onChange={toggleLogin}
                            />
                        </Form.Group>
                        <small className="text-danger my-2">{error || errors}</small> <br/>
                        {isLogin ? <Button variant="primary" type="submit"
                                           className="mt-3">Login</Button> :
                            <Button variant="primary" type="submit" className="mt-3">
                                Register
                            </Button>
                        }

                        <Button variant="primary" className="ms-3 mt-3"
                                onClick={handleGoogleLogin}>
                            Google Login
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default Login;