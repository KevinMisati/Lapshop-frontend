import React from 'react';
import classes from "./Error404.module.css"
import { Link } from 'react-router-dom';

const Error404 = () => {
return(
    <div className={classes["error-container"]}>
        <div className={classes.error}>
            <p>Oops! the page you requested for was not found.</p>
            <Link className={classes["home-link"]} to="/">Go back home</Link>
        </div>
    </div>
) 
};

export default Error404;
