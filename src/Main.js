import React, { Component } from "react";
import {
    Route, Routes, 
    NavLink, 
    HashRouter
} from "react-router-dom";
import First from "./First";
import Second from "./Second";
import logo from "./images/css-banner.jpeg";

class Main extends Component {
    render() {
        return (
            <HashRouter>
            <div>
                <h1>CSS Frameworks and Libraries</h1>
                <img src={logo}></img>
                <ul className="header">
                    <li><NavLink to="/first">Frameworks</NavLink></li>
                    <li><NavLink to="/second">Libraries</NavLink></li>
                </ul>
                <div className="content">
                <Routes>
                    <Route path="/first" element={<First />}/>
                    <Route path="/second" element={<Second />}/>
                </Routes>
                </div>
            </div>
            </HashRouter>
        );
    }
}

export default Main;