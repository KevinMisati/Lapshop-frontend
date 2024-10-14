import React,{useState,useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import classes from "./Login.module.css"
import {Link} from "react-router-dom"
import { apiService } from '../../axios';
import { CartContext } from '../../Context';
import { AccountContext } from '../../AccountContext';

const Login = () => {
    const navigate = useNavigate()
    const [errMessage,setErrMessage] = useState("")
    const [successMessage,setSuccessMessage] = useState("")
    const [form,setForm] = useState({
        email:"",
        password:"",
    })

    const {loginUser} = useContext(AccountContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (form.password !== "" && form.email !== "" ){
            apiService({
                url:"token/",
                method:"POST",
                data:form
            }).then((res) => {
                localStorage.setItem("userDetails",JSON.stringify(res.data))
                loginUser(res.data)
                setSuccessMessage("Logged in successfully")
                setTimeout(() => {
                    navigate("/")
                },2000)
            }).catch(error => {
                console.log(error)
                if(error.data){
                    setErrMessage(error.data.detail)
                }
            })
        }

        else{
            setErrMessage("Please fill in the form correctly, all fields are required.")
        }
        
    }

    const handleFormChange = (e) => {
        setErrMessage("")
        setSuccessMessage("")
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className={classes["login-container"]}>
            <div className={classes["login"]}>
                <h1>Login</h1>
                <form>
                    <div className={classes["input-control"]}>
                        <label htmlFor='email'>email</label>
                        <input required={true} onChange={handleFormChange} id='email' type='email' name='email' value={form.email} />
                    </div>
                    <div className={classes["input-control"]}>
                        <label htmlFor='password'>passowd</label>
                        <input required={true} onChange={handleFormChange} id='password' type='password' name='password' value={form.password} />
                    </div>

                    {errMessage && <p className={classes["err-message"]}>{errMessage}</p>}
                    {successMessage && <p className={classes["success-message"]}>{successMessage}</p>}

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
