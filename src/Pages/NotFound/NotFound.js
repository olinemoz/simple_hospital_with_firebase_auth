import React from 'react';
import NotFoundImage from '../../images/404.svg'

const NotFound = () => {
    return (
        <div style={{margin: "75px 0px"}}>
            <img className="w-50 d-flex m-auto" src={NotFoundImage} alt=""/>
        </div>
    );
};

export default NotFound;