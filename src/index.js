import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router} from "react-router-dom"
import App from './App';
import "./index.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

render(
    <Router>
        <App  />
    </Router>
    , document.getElementById('root'));