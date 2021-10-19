import React from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {HashLink} from "react-router-hash-link";
import useAuth from "../../hooks/useAuth";

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <Navbar bg="dark" variant="dark" fixed="top" expand="md">
            <Container>
                <Navbar.Brand as={HashLink} to="/">All Care</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto">
                        <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/consultants">Consultants</Nav.Link>
                        <Nav.Link as={HashLink} to="/pharmacy">Buy Medicines</Nav.Link>
                        <Nav.Link as={HashLink} to="/medicaltests">Medical Test</Nav.Link>
                    </Nav>
                    {user?.displayName ? <Button onClick={logOut} variant="light">Logout</Button>
                        : <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
                    }
                    {
                        user?.displayName && <Navbar.Text className="mx-3">
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;