import React,{useState,useContext} from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import classes from "./Login.module.css"
import {Link} from "react-router-dom"
import { apiService } from '../../axios';
import { AccountContext } from '../../AccountContext';
import Snackbar from '../Snackbar';

const NewPassword = () => {
    const navigate = useNavigate()
    const { uid, token } = useParams();
    const [errMessage,setErrMessage] = useState("")
    const [successMessage,setSuccessMessage] = useState("")
    const [form,setForm] = useState({
        email:"",
        confirmPassword:"",
    })
    const [showSnackbar, setShowSnackbar] = useState(false);

    const {loginUser} = useContext(AccountContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (form.password !== "" && form.confirmPassword !== "" && form.password === form.confirmPassword  ){
            apiService({
                url:`password-reset-confirm/${uid}/${token}/`,
                method:"POST",
                data:form
            }).then((res) => {
                loginUser(res.data)
                setSuccessMessage("Password has been reset successfully")
                setShowSnackbar(true)
                setTimeout(() => {
                    navigate("/account/login")
                },2000)
            }).catch(error => {
                console.log(error)
                if(error.data){
                    setErrMessage(error.data.detail)
                }
            })
        }

        else{
            setErrMessage("Please fill in the form correctly. The passwords should match.")
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
                <h1>Set new password</h1>
                <form>
                    <div className={classes["input-control"]}>
                        <label htmlFor='password'>password</label>
                        <input required={true} onChange={handleFormChange} id='password' type='password' name='password' value={form.password} />
                    </div>

                    <div className={classes["input-control"]}>
                        <label htmlFor='confirmPassword'>confirm password</label>
                        <input required={true} onChange={handleFormChange} id='confirmPassword' type='password' name='confirmPassword' value={form.confirmPassword} />
                    </div>

                    {errMessage && <p className={classes["err-message"]}>{errMessage}</p>}

                    <div className={classes["input-control"]}>
                        <button onClick={handleSubmit} className={classes["signin-btn"]}>Submit</button>
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

export default NewPassword
