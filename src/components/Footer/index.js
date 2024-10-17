import React,{useState} from 'react'
import classes from "./Footer.module.css"
const Footer = () => {

    const [support,setSupport] = useState(false)
    const [offers, setOffers] = useState(false)
    const [aboutUs, setAboutUs] = useState(false)
    
    const handleSupportClick = () => {
        setSupport(() => !support)
        console.log(support)
       
    }
    const handleOffersClick = () => {
        setOffers(!offers)
        console.log(support)
        console.log("hello")
    }
    const handleAboutClick = () => {
        setAboutUs(!aboutUs)
        console.log(support)
        console.log("hello")
    }
    return (
        <>
      <div className={classes["footer-container"]}> 
           
            <div className={classes.footer}>
                <div className={classes.form}>
                <h5>Hear it first</h5>
                
                    <form action="">
                        <input placeholder="Sign Up for Emails" type="email" />
                        <button onClick={() => console.log("hello")} className={classes.submit}>{">"}</button>
                    </form>
                </div>
            
                <div className={classes["info-container"]}>
                    <article className={classes["accordition-container-first"] }>
                            <div >
                                <h4 onClick={handleSupportClick} className=     {classes["accordition-header"]} >
                                    <span>support</span>
                                    <button name="offers" >
                                    {!support ? "+" : "-"}
                                    </button>
                                </h4>
                            </div>
                            <div className={ !support ? classes["accordition"] : ""}>
                                <ul >
                                    <li>
                                        <a href="/" >Help Center</a>
                                    </li>
                                    <li>
                                        <a href="/" >Warranty</a>
                                    </li>
                                    <li>
                                        <a href="/" >Contact Us</a>
                                    </li>
                                    <li><a href="/">Product Help</a>
                                    </li>
                                    <li>
                                        <a href="/" >Order Status</a>
                                    </li>
                                    <li>
                                        <a href="/">Recycling</a>
                                    </li>
                                </ul>
                            </div>
                    </article>

                    <article className={classes["accordition-container"]}>
                            <div >
                                <h4 onClick={handleOffersClick } className={classes["accordition-header"]}>
                                    <span>offers</span> 
                                    <button name="offers" >
                                    {!offers ? "+" : "-"}
                                    </button>
                                </h4>
                            </div>
                        <div className={!offers ? classes["accordition"] : ""}>
                                <ul className={classes["footer-info-list"]}>
                                    <li>
                                        <a href="/" >Discount Programs</a>
                                    </li>
                                    <li>
                                        <a href="/" >Bulk Orders</a>
                                    </li>
                                </ul>
                            </div>
                    </article>

                    <article className={classes["accordition-container"]}>
                            <div >
                                <h4 onClick={handleAboutClick} className={classes["accordition-header"]}>
                                    <span>About us</span>
                                    <button name="aboutUs" >
                                    {!aboutUs ? "+" : "-"}
                                    </button>
                                </h4>
                            </div>

                        <div className={!aboutUs ? classes["accordition"] : ""}>
                                <ul className={classes["footer-info-list"]}>
                                    <li>
                                        <a href="/" >About</a>
                                    </li>
                                    <li>
                                        <a href="/" >Born in PC</a>
                                    </li>
                                    <li>
                                        <a href="/" >Protect Our Winters</a>
                                    </li>
                                    <li>
                                        <a href="/" >Careers</a>
                                    </li>
                                </ul>
                        </div>
                    </article>
                </div>

{/* social media */}
                <div className={classes["social-media"]}>
                    <h5>Follow us</h5>
                    <ul>
                    <li>
                        <i  className='fab fa-instagram fa-2x'></i>
                    </li>
                    <li>
                        <i className='fab fa-youtube fa-2x'></i>
                    </li>
                    <li>
                        <i className="fab fa-facebook-square fa-2x"></i>
                    </li>
                    <li>
                        <i className='fab fa-twitter fa-2x'></i>
                    </li>
                    </ul>

                </div>

                    
            
            
            </div>
                
                
             </div> 
            
        </>
    )
}

export default Footer
