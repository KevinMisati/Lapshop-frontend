import React,{useContext,useState,useEffect} from 'react'
import classes from "./Logout.module.css"
import { useNavigate } from "react-router-dom"
import { CartContext } from '../../Context'



const Logout = () => {

    const [userDetails,setUserDetails] = useState({})
    const{logOutUser} = useContext(CartContext)
    const navigate = useNavigate()

    const handleLogOut = (e) => {
        e.preventDefault()
    
    }   
    
    return (
        <div className={classes['logout-container']}>
            <div className={classes["logout"]}>
                <h1>My Account</h1>
                <div>
                    <h3>account details</h3>
                    <div>
                        <p>Email: {userDetails.email}</p>
                    </div>
                </div>
                <div className={classes["logout-btn"]}>
                    <button onClick={handleLogOut}>log out</button>
                </div>
            </div>
        </div>
    )
}

export default Logout
