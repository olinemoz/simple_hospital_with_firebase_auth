import React from 'react';

const Banner = () => {
    return (
        <div>
            <h2 className="text-primary text-center">Our Consultation Center</h2>
            <div className="d-flex mt-4">
                <img
                     className="mx-auto w-75"
                     src="https://i.ibb.co/rHNbYqB/hospital.jpg"
                     alt="Our Hospital"
                />
            </div>
        </div>
    );
};

export default Banner;