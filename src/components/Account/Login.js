import React,{useState,useEffect} from 'react'
import classes from "./Login.module.css"
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [isformValid,setIsFormValid] = useState(false)
    const [errMessage,setErrMessage] = useState("")


    useEffect(() => {
        console.log(email,password)
        if (email !== ""){
            setIsFormValid(true)
        } 
    })

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
   
    return (
        <div className={classes["login-container"]}>
            <div className={classes["login"]}>
                <h1>Login</h1>
                <form>
                    {
                        <p className={classes["err-message"]}>{errMessage}</p>
                    }
                    <div className={classes["input-control"]}>
                        <label htmlFor='email'>email</label>
                        <input required={true} onChange={handleEmailChange} id='email' type='email' name='email' value={email} />
                    </div>
                    <div className={classes["input-control"]}>
                        <label htmlFor='password'>passowd</label>
                        <input required={true} onChange={handlePasswordChange} id='password' type='password' name='password' value={password} />
                    </div>
                    <div className={classes["input-control"]}>
                        <button onClick={handleSubmit} className={classes["signin-btn"]}>sign in</button>
                    </div>
                </form>
                <h5 className={classes["create-account-link"]}>
                    <Link to="/account/signup" >
                        create account
                    </Link>
                </h5>
            </div>
        </div>
    )
}

export default Login
