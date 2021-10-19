import React from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/About_Us/AboutUs";
import NotFound from "./Pages/NotFound/NotFound";
import AuthProvider from "./context/AuthProvider";
import Login from "./Pages/Login/Login";
import Consultants from "./Pages/Consultants/Consultants";
import useConsultants from "./hooks/useConsultants";
import ConsultantDetails from "./Pages/ConsultantDetails/ConsultantDetails";
import Footer from "./Components/Footer/Footer";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";

function App() {
    const [consultants] = useConsultants()
    // console.log("consultants:",consultants)
    return (
        <AuthProvider>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/home" component={Home}>
                        <Redirect to="/"/>
                    </Route>
                    <Route exact path="/consultants"
                           render={() => <Consultants consultants={consultants}/>}/>

                    <PrivateRoute exact path="/consultant/:consultantsId">
                        <ConsultantDetails/>
                    </PrivateRoute>

                    <Route exact path="/about" component={AboutUs}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact component={NotFound}/>
                </Switch>
                <Footer/>
            </Router>
        </AuthProvider>
    );
}

export default App;
