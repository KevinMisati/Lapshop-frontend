import React from 'react'
import classes from "./Button.module.css"

const Button = ({text,color,background,font}) => {
    return (
        
            <button style={{
                color:color,
                backgroundColor:background,
                fontSize:font,
            }} 
            className={classes.button}>{text}</button>
    )
}

export default Button
