import React from 'react';
import NotFoundImage from '../../images/404.svg'

const NotFound = () => {
    return (
        <div style={{marginTop: "100px"}}>
            <img className="w-50 d-flex m-auto" src={NotFoundImage} alt=""/>
        </div>
    );
};

export default NotFound;