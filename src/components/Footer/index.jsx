import classes from "./Footer.module.css"
const Footer = () => {
    return (
        
      <div className={classes["footer-container"]}>
        Built with&nbsp; <span style={{color:"red"}}>♡</span>&nbsp;by&nbsp; 
        <a target="blank" href="https://kevinmisati.netlify.app/">Kevin</a>
      </div> 
    )
}

export default Footer
