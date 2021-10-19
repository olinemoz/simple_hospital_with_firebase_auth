import React from 'react';
import {Button, Card} from "react-bootstrap";
import {useHistory} from "react-router-dom";

const Consultant = ({consultant}) => {
    const {name, image, specialist, id} = consultant
    const history = useHistory()
    const consultantDetails = () => {
        history.push(`/consultant/${id}`)
    }
    return (
        <div className="mt-3">
            <Card style={{width: '95%', height: '450px'}} className="mx-auto">
                <Card.Img variant="top" src={image}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <b>Department: </b> {specialist}
                    </Card.Text>
                    <Button variant="primary" onClick={consultantDetails}>View Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Consultant;