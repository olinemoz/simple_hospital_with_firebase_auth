import React from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import AboutUs from "./Pages/About_Us/AboutUs";
import NotFound from "./Pages/NotFound/NotFound";
import AuthProvider from "./context/AuthProvider";
import Login from "./Pages/Login/Login";

function App() {

    return (
        <AuthProvider>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/home" component={Home}>
                        <Redirect to="/"/>
                    </Route>
                    <Route exact path="/services" component={Services}/>
                    {/*<Route exact path="/service/:serviceId" component={Services}/>*/}
                    <Route exact path="/about" component={AboutUs}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact component={NotFound}/>
                </Switch>
            </Router>
        </AuthProvider>
    );
}

export default App;
