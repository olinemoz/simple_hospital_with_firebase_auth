import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Container} from "react-bootstrap";

const TestDetails = () => {
    const [testDetails, setTestDetails] = useState({})
    const {testId} = useParams()

    useEffect(() => {
        fetch('/test.json')
            .then(response => response.json())
            .then(data => setTestDetails(data.find(test => test.id === parseInt(testId))))
    }, [testId])

    return (
        <div style={{margin: "100px 0px"}}>
            <div style={{marginTop: "75px"}}>
                <Container>
                    <h2 className="text-primary text-center">Test Details</h2>
                    <div className="mt-3  mx-auto py-3 px-5  mb-5 shadow-lg"
                         style={{textAlign: "justify", textJustify: "inter-word"}}
                    >
                        <img src={testDetails.image} alt={testDetails.name} className="w-50 mx-auto d-flex"/>
                        <div className="my-3">
                            <h4>{testDetails.name} Test</h4>
                            <b>Test Fee: </b> {testDetails.test_fee} <br/>
                            <b>Description: </b> {testDetails.delivery_time}
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default TestDetails;