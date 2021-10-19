import React from 'react';
import {Col, Row} from "react-bootstrap";

const AboutUs = () => {
    const aboutData = [
        {
            id: 1,
            content: 'We Provide Best Environment in Bangladesh. This Hospital has just completed the two years of its successful journey towards its goal. I am proud of getting the opportunity to be involved with BSHL.'
        },
        {
            id: 2,
            content: 'All Care becomes one of the most advanced and modern hospitals in Bangladesh with all the characteristics of a world-class hospital with a wide range of services and specialists, equipment, technology, ambiance and high-quality service.'
        },
        {
            id: 3,
            content: 'All Care Hospital Ltd. (BSHL) is a multi specialty hospital located in the Sher-E-Bangla Nagar Medical Hub of Dhaka City.' +
                'Our Hospital employs the integrated approach and offers state of the art services covering Out patient, Diagnostics, In-patient, Day care and Intensive care facilities in a One-stop medical centre.'
        },
    ]
    return (
        <div className="my-4">
            <h2 className="text-primary text-center mb-3">About Us</h2>
            <Row>
                {
                    aboutData.map(data => (
                        <Col key={data.id} xs={12} sm={12} md={6} lg={4} className="mt-5 mt-sm-5 mt-md-4 mt-lg-3">
                            <div className="shadow-lg p-4 h-100 mx-3">
                                <p>{data.content}</p>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </div>
    );
};

export default AboutUs;