import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import classes from "./SignUp.module.css"
import { apiService } from '../../axios'
import Snackbar from '../Snackbar';

const SignUp = () => {
    const navigate = useNavigate()
    const [errMessage,setErrMessage] = useState("")
    const [successMessage,setSuccessMessage] = useState("")
    const [form,setForm] = useState({
        email:"",
        
        password:"",
    })
    const [showSnackbar, setShowSnackbar] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (form.email !== "" && form.password !== ""  && form.email.includes("@")){
            apiService({
                url:"register/",
                method:'POST',
                data:form
            }).then(() => {
                setSuccessMessage("Account created successfully")
                setShowSnackbar(true)
                setTimeout(() => {
                    navigate("/account/login")
                },2000)
            })
            .catch(error => console.log(error)) 
        }
        else{
            setErrMessage("Please fill in the form correctly, all fields are required.")
        }
        
    }

    const handleFormChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    return (
        <div className={classes["signup-container"]}>
            <div className={classes["signup"]}>
                <h1>Create Account</h1>
                <form>
                    <div className={classes["input-control"]}>
                        <label htmlFor='email'>email</label>
                        <input onChange={handleFormChange} id='email' type='email' name='email' value={form.email} />
                    </div>
                    
                    <div className={classes["input-control"]}>
                        <label htmlFor='password'>passowd</label>
                        <input onChange={handleFormChange} id='password' type='password' name='password' value={form.password} />
                    </div>
                    <div className={classes["input-control"]}>
                        <button onClick={handleSubmit} className={classes["register-btn"]}>create account</button>
                    </div>
                    {errMessage && <p className={classes["err-message"]}>{errMessage}</p>}
                </form>
            </div>
            <Snackbar
                message={successMessage}
                show={showSnackbar}
                type="success"
                onClose={() => setShowSnackbar(false)}
            />
        </div>
    )
}

export default SignUp
