import classes from "./Button.module.css"

const Button = ({text,color,background,font,onClick= () => {}}) => {
    return (
        
            <button style={{
                color:color,
                backgroundColor:background,
                fontSize:font,
            }} 
                onClick={onClick}
                className={classes.button}
            >
                {text}
            </button>
    )
}

export default Button
