import React from 'react';
import {Carousel} from "react-bootstrap";
import services2 from '../../images/Services/services2.jpg'
import services3 from '../../images/Services/services3.jpg'

const Services = () => {
    return (
        <div className="mt-4">
            <h2 className="text-primary text-center">Our Services</h2>
            <Carousel className="w-75 mx-auto mt-3">
                <Carousel.Item>
                    <img
                        className="d-block w-100 opacity-75"
                        src={services2}
                        alt="Second slide"
                        style={{height: "450px"}}
                    />
                    <Carousel.Caption>
                        <h2 className="text-white">ICU Services</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 opacity-75"
                        src={services3}
                        alt="Third slide"
                        style={{height: "450px"}}
                    />

                    <Carousel.Caption>
                        <h2 className="text-white">Emergency Services</h2>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Services;