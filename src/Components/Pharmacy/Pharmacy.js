import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Row} from "react-bootstrap";
import {useHistory} from "react-router-dom";

const Pharmacy = () => {
    const [featuredMedicines, setFeaturedMedicines] = useState([])
    useEffect(() => {
        fetch('/medicine.json')
            .then(response => response.json())
            .then(data => setFeaturedMedicines(data.filter(d => d.featured === "yes")))
    }, [])
    const history = useHistory()
    const pharmacyRoute = () => {
        history.push(`/pharmacy`)
    }
    return (
        <div>
            <h2 className="text-center text-primary mt-3">Visit Our Pharmacy</h2>
            <Row>
                {
                    featuredMedicines.map(medicine => (
                        <Col key={medicine.id} xs={12} sm={12} md={6} lg={4}>
                            <Card style={{width: '95%'}} className="mx-auto my-3">
                                <Card.Img variant="top" src={medicine.image} style={{height: "250px"}}/>
                                <Card.Body>
                                    <Card.Title>{medicine.name}</Card.Title> <br/>
                                    <Button onClick={pharmacyRoute}>Visit Pharmacy</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </div>
    );
};

export default Pharmacy;