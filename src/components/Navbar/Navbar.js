import React,{useContext} from 'react'
import classes from "./Navbar.module.css"
import Header  from './Header'
import MobileHeader from './MobileHeader'
import { CartContext } from '../../Context'

const Navbar = () => {

    const{user} = useContext(CartContext)
    console.log(user)
    
    return (
        <div className={classes["navbar-container"]}>
            <div className={classes["large-screen"]}>
                <Header isUserLoggedIn={user.isLoggedIn} />
            </div>
            <div className={classes["small-screen"]} >
                <MobileHeader isUserLoggedIn={user.isLoggedIn} />
            </div>
           
            
        </div>
    )
}

export default Navbar
