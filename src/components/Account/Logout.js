import React,{useContext} from 'react'
import classes from "./Logout.module.css"
import { useNavigate } from "react-router-dom"
import { getAuth, signOut } from "firebase/auth";
import { CartContext } from '../../Context'



const Logout = () => {

    const{logOutUser} = useContext(CartContext)
    const navigate = useNavigate()

    const auth = getAuth();
    const handleLogOut = (e) => {
        e.preventDefault()
        signOut(auth).then(() => {
            navigate("/")
            console.log("success")
            logOutUser()
        }).catch((error) => {
            console.log(error)
        });

        
    }
    
    return (
        <div className={classes['logout-container']}>
            <div className={classes["logout"]}>
                <h1>My Account</h1>
                <div className={classes["logout-btn"]}>
                    <button onClick={handleLogOut}>log out</button>
                </div>
                <div>
                    <h3>account details</h3>

                </div>
            </div>
        </div>
    )
}

export default Logout
