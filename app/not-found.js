import React from 'react';
import classes from "./Error404.module.css"
import Link from 'next/link';

export default function NotFound (){
return(
    <div className={classes["error-container"]}>
        <div className={classes.error}>
            <p>Oops! the page you requested for was not found.</p>
            <Link className={classes["home-link"]} href="/">Go back home</Link>
        </div>
    </div>
) 
};

