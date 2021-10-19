import React, {useEffect, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import Test from "../Test/Test";

const MedicalTests = () => {
    const [medicalTests,setMedicalTests] = useState([])
    useEffect(() => {
        fetch('/test.json')
            .then(response => response.json())
            .then(data => setMedicalTests(data))
    },[])
    return (
        <div style={{margin: "75px 0px"}}>
           <h2 className="text-center text-primary mb-3">Tests</h2>
            <Row>
                {
                    medicalTests.map(test => {
                      return(
                          <Col key={test.id} xs={12} sm={12} md={6} lg={4}>
                              <Test medicalTests={test}/>
                          </Col>
                      )
                    })
                }
            </Row>
        </div>
    );
};

export default MedicalTests;