import React from 'react'
import Button from "./Button"

const AddToCartButton = ({text,color,background,font}) => {
    return (
        <div >
            <Button
            text={text}
            color={color}
            background={background}
            font={font}
            /> 
        </div>
    )
}

export default AddToCartButton
