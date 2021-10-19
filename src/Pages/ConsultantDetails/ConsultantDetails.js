import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Container} from "react-bootstrap";

const ConsultantDetails = () => {
    const [consultantDetails, setConsultantDetails] = useState({})
    const {name, image, qualification, specialist, visit_fee, short_description} = consultantDetails
    const {consultantsId} = useParams()
    // console.log("Filter: ", consultantDetails)

    useEffect(() => {
        fetch(`/consultants.json`)
            .then(response => response.json())
            .then(data => setConsultantDetails(data.find(consultant => consultant.id === parseInt(consultantsId))))
    }, [consultantsId])


    return (
        <div style={{marginTop: "75px"}}>
            <Container>
                <h2 className="text-primary text-center">Details of Consultant</h2>
                <div className="mt-3  mx-auto p-5  mb-5 shadow-lg"
                     style={{textAlign: "justify", textJustify: "inter-word"}}
                >
                    <img src={image} alt={name} className="w-75 mx-auto d-flex"/>
                    <div className="my-3">
                        <b>{name}</b> <br/>
                        <b>Qualification: </b> {qualification} <br/>
                        <b>Specialization: </b> {specialist} <br/>
                        <b>Visit Fee: </b> {visit_fee} <br/>
                        <b>Description: </b> {short_description}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ConsultantDetails;