import React from 'react'
import classes from "./Title.module.css"

const Title = ({title}) => {
    return (
        <div className={classes["title_container"]}>
            <h3>{title}</h3>
        </div>
    )
}

export default Title
