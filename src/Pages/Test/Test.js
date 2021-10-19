import React from 'react';
import {Button, Card} from "react-bootstrap";
import {useHistory} from "react-router-dom";

const Test = ({medicalTests}) => {
    const {name,image,id} = medicalTests
    const history = useHistory()
    const testDetails = () => {
        history.push(`/tests/${id}`)
    }
    return (
        <Card style={{width: '95%'}} className="mx-auto my-3">
            <Card.Img variant="top" src={image} style={{height: "250px"}} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Button variant="primary" onClick={testDetails}>Test Details</Button>
            </Card.Body>
        </Card>
    );
};

export default Test;