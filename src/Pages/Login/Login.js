import React from 'react';
import initializeFirebaseAuthentication from "../../Firebase/firebase.init";
import {Button, Col, Form, Row} from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

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
        signInUsingGoogle
    } = useAuth();

    return (
        <div style={{marginTop: "75px"}}>
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
                        <Button variant="primary" type="submit" className="mt-3">
                            {isLogin ? "Login" : "Sign Up"}
                        </Button>
                        <Button variant="primary" type="submit" className="ms-3 mt-3" onClick={signInUsingGoogle}>
                            Google Login
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default Login;