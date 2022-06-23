import React,{useContext,useState,useEffect} from 'react'
import classes from "./Logout.module.css"
import { useNavigate } from "react-router-dom"
import { getAuth, signOut } from "firebase/auth";
import { CartContext } from '../../Context'



const Logout = () => {

    const [userDetails,setUserDetails] = useState({})
    const{logOutUser} = useContext(CartContext)
    const navigate = useNavigate()

    //const {user} = useContext(CartContext)

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
useEffect(() => {
    const user = auth.currentUser;
        if (user !== null) {
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        const emailVerified = user.emailVerified;
        console.log(email)
        setUserDetails({
            email:email
        })
        }

},
[])
        
    
    return (
        <div className={classes['logout-container']}>
            <div className={classes["logout"]}>
                <h1>My Account</h1>
                <div className={classes["logout-btn"]}>
                    <button onClick={handleLogOut}>log out</button>
                </div>
                <div>
                    <h3>account details</h3>
                    <div>
                        <p>Email: {userDetails.email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Logout
