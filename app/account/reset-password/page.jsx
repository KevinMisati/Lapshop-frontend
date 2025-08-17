"use client"
import React,{useState} from 'react'
import { useRouter } from 'next/navigation';
import classes from "../account.module.css"
import { apiService } from '@/axios';
import Snackbar from '@/components/Snackbar';

const ResetPassword = () => {
    const router = useRouter()
    const [errMessage,setErrMessage] = useState("")
    const [successMessage,setSuccessMessage] = useState("")
    const [form,setForm] = useState({email:"",})
    const [showSnackbar, setShowSnackbar] = useState(false);

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
                setTimeout(() => {router.push('/account/login/')},2000)
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