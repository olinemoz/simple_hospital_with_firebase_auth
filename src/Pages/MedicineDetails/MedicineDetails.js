import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Container} from "react-bootstrap";

const MedicineDetails = () => {
    const [medicine, setMedicine] = useState({})
    const {medicineId} = useParams()
    useEffect(() => {
        fetch('/medicine.json')
            .then(response => response.json())
            .then(data => setMedicine(data.find(medi => medi.id === parseInt(medicineId))))
    }, [medicineId])

    console.log(medicine)
    return (
        <div style={{marginTop: "75px"}}>
            <div style={{marginTop: "75px"}}>
                <Container>
                    <h2 className="text-primary text-center">Medicine Details</h2>
                    <div className="mt-3  mx-auto py-3 px-5  mb-5 shadow-lg"
                         style={{textAlign: "justify", textJustify: "inter-word"}}
                    >
                        <img src={medicine.image} alt={medicine.name} className="w-50 mx-auto d-flex"/>
                        <div className="my-3">
                            <h4>{medicine.name}</h4>
                            <b>Price: </b> {medicine.price} Tk/- <br/>
                            <b>Quantity: </b> {medicine.quantity}
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default MedicineDetails;