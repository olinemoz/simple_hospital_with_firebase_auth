import React, {useEffect, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import Medicine from "../Medicine/Medicine";

const Pharmacy = () => {
    const [pharmacy, setPharmacy] = useState([])
    useEffect(() => {
        fetch('/medicine.json')
            .then(response => response.json())
            .then(data => setPharmacy(data))
    },[])
    return (
        <div style={{marginTop: "75px"}}>
            <Row>
                {
                    pharmacy.map(medicine => {
                      return(
                          <Col key={medicine.id} xs={12} sm={12} md={6} lg={4}>
                             <Medicine medicines={medicine}/>
                          </Col>
                      )
                    })
                }
            </Row>
        </div>
    );
};

export default Pharmacy;