import {useState,useContext} from 'react'
import { useNavigate,useLocation } from 'react-router-dom';
import classes from "./Login.module.css"
import {Link} from "react-router-dom"
import { apiService } from '../../axios';
import { AccountContext } from '../../AccountContext';
import Snackbar from '../Snackbar';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const nextPage = location?.state?.nextPage
    const [errMessage,setErrMessage] = useState("")
    const [successMessage,setSuccessMessage] = useState("")
    const [form,setForm] = useState({
        email:"",
        password:"",
    })
    const [showPassword,setShowPassword] = useState(false)
    const [showSnackbar, setShowSnackbar] = useState(false);

    const {loginUser} = useContext(AccountContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (form.password !== "" && form.email !== "" ){
            apiService({
                url:"token/",
                method:"POST",
                data:form
            }).then((res) => {
                loginUser(res.data)
                setSuccessMessage("Logged in successfully")
                setShowSnackbar(true)
                setTimeout(() => {
                    if(nextPage) navigate(`/${nextPage}`)
                    else navigate("/")
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
                        <label htmlFor='password'>password</label>
                        <div>
                            <input 
                                required={true} 
                                onChange={handleFormChange} 
                                id='password' 
                                type={showPassword ?  "text" : 'password' }
                                name='password' 
                                value={form.password} 
                            />
                            <i 
                                onClick={() => setShowPassword(prev => !prev)}
                                class={showPassword ? "fa fa-eye-slash" :"fa fa-eye" } 
                                aria-hidden="true"
                            >
                            </i>
                        </div>
                    </div>

                    {errMessage && <p className={classes["err-message"]}>{errMessage}</p>}

                    <div className={classes["input-control"]}>
                        <button onClick={handleSubmit} className={classes["signin-btn"]}>sign in</button>
                    </div>
                </form>
                <div className={classes["createForgot-links"]}>
                    <h5 className={classes["create-account-link"]}>
                        <Link to="/account/reset-password" >
                            forgot password
                        </Link>
                    </h5>
                    <h5 className={classes["create-account-link"]}>
                        <Link to="/account/signup" >
                            create account
                        </Link>
                    </h5>
                </div>
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

export default Login
