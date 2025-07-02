import React,{useState,useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import classes from "./Login.module.css"
import {Link} from "react-router-dom"
import { apiService } from '../../axios';
import { AccountContext } from '../../AccountContext';
import Snackbar from '../Snackbar';

const ResetPassword = () => {

  const navigate = useNavigate()
    const [errMessage,setErrMessage] = useState("")
    const [successMessage,setSuccessMessage] = useState("")
    const [form,setForm] = useState({
        email:"",
    })
    const [showSnackbar, setShowSnackbar] = useState(false);

    const {loginUser} = useContext(AccountContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (form.email !== "" ){
            apiService({
                url:"password-reset/",
                method:"POST",
                data:form
            }).then((res) => {
                setSuccessMessage("Reset email sent")
                setShowSnackbar(true)
                setTimeout(() => {navigate('/account/login/')},2000)
            }).catch(error => {
                console.log(error)
                if(error.data){
                    setErrMessage(error.data.detail)
                }
            })
        }

        else{
            setErrMessage("The email field is required")
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
                <h1>Reset Password</h1>
                <form>
                    <div className={classes["input-control"]}>
                        <label htmlFor='email'>email</label>
                        <input required={true} onChange={handleFormChange} id='email' type='email' name='email' value={form.email} />
                    </div>
                    

                    {errMessage && <p className={classes["err-message"]}>{errMessage}</p>}

                    <div className={classes["input-control"]}>
                        <button onClick={handleSubmit} className={classes["signin-btn"]}>Reset</button>
                    </div>
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

export default ResetPassword