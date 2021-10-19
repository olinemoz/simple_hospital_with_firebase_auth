import React from 'react';
import {Navbar} from "react-bootstrap";

const Footer = () => {
    return (
        <Navbar bg="dark" fixed="bottom" className="text-white">
                <div className="d-flex mx-auto">
                    <p> &copy; Copyright 2021 All Care Hospital</p>
                </div>
        </Navbar>
    );
};

export default Footer;