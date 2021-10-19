import React from 'react';
import initializeFirebaseAuthentication from "../../Firebase/firebase.init";
import {Button, Col, Form, Row} from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import {useHistory, useLocation} from "react-router-dom";

initializeFirebaseAuthentication()
const Login = () => {

    const {
        user,
        name,
        email,
        password,
        isLogin,
        toggleLogin,
        error,
        handleInputChange,
        handleRegistration,
        signInUsingGoogle,
    } = useAuth();

    const location = useLocation()
    const history = useHistory()
    const Redirect_URL = location.state?.from || '/consultants'
    const handleGoogleLogin = () => {
        signInUsingGoogle().then(result => {
            history.push(Redirect_URL)
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
                        <small className="text-danger my-2">{error}</small> <br/>
                        {isLogin ? <Button variant="primary" type="submit"
                                           className="mt-3">Login</Button> :
                            <Button variant="primary" type="submit" className="mt-3">
                                Register
                            </Button>
                        }

                        <Button variant="primary" type="submit" className="ms-3 mt-3"
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