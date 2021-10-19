import React from 'react';
import Banner from "../../Components/Banner/Banner";
import Services from "../../Components/Services/Services";
import Pharmacy from "../../Components/Pharmacy/Pharmacy";
import AboutUs from "../../Components/About_Us/AboutUs";
import ContactUs from "../../Components/Contact_Us/ContactUs";

const Home = () => {
    return (
        <div style={{margin: "100px 0px"}}>
            <Banner/>
            <Services/>
            <Pharmacy/>
            <AboutUs/>
            <ContactUs/>
        </div>
    );
};

export default Home;