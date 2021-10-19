import React from 'react';
import {Button, Card} from "react-bootstrap";
import {useHistory} from "react-router-dom";

const Medicine = ({medicines}) => {
    const {id,name,image} = medicines
    const  history = useHistory()
    const medicineDetails = () => {
        history.push(`/medicine/${id}`)
    }
    return (
        <div>
            <Card style={{width: '95%'}} className="mx-auto my-3">
                <Card.Img variant="top" src={image} style={{height: "250px"}} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Button variant="primary" onClick={medicineDetails}>View Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Medicine;