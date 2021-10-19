import React from 'react';
import {Col, Row} from "react-bootstrap";
import Consultant from "../Consultant/Consultant";

const Consultants = ({consultants}) => {

    return (
        <div style={{marginTop: "100px"}}>
            <h2 className="text-primary text-center">Our Consultants</h2>
            <Row>
                {
                    consultants.map(consultant => {
                        return (
                            <Col key={consultant.id} xs={12} sm={12} md={6} lg={4}>
                                <Consultant consultant={consultant}/>
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    );
};

export default Consultants;