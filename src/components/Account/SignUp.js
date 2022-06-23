import React,{useState} from 'react'
import classes from "./SignUp.module.css"
import { useNavigate } from 'react-router-dom'
import firebaseConfig from "../../firebase/config"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";




const SignUp = () => {
    const navigate = useNavigate()
    const [errMessage,setErrMessage] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [firstname,setFirstName] = useState("")
    const [lastname,setLastName] = useState("")
    
    const auth = getAuth();
    const handleSubmit = (e) => {
        e.preventDefault()
        if (email !== "" && password !== "" && firstname !=="" && lastname !== "" && email.includes("@")){

            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errMessage)
            });
        }
        else{
            setErrMessage("Please fill in the form correctly, all fields are required.")
        }
        
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleFirstnameChange = (e) => {
        setFirstName(e.target.value)
    }
    const handleLastNameChange = (e) => {
        setLastName(e.target.value)
    }
    return (
        <div className={classes["signup-container"]}>
            <div className={classes["signup"]}>
                <h1>Create Account</h1>
                <form>
                    {
                        <p className={classes["err-message"]}>{errMessage}</p>
                    }
                    <div className={classes["input-control"]}>
                        <label htmlFor='email'>email</label>
                        <input onChange={handleEmailChange} id='email' type='email' name='email' value={email} />
                    </div>
                    <div className={classes["input-control"]}>
                        <label htmlFor='firstname'>first name</label>
                        <input onChange={handleFirstnameChange} id='firstname' type='text' name='firstname' value={firstname} />
                    </div>
                    <div className={classes["input-control"]}>
                        <label htmlFor='lastname'>last name</label>
                        <input onChange={handleLastNameChange} id='lastname' type='text' name='lastname' value={lastname} />
                    </div>
                    <div className={classes["input-control"]}>
                        <label htmlFor='password'>passowd</label>
                        <input onChange={handlePasswordChange} id='password' type='password' name='password' value={password} />
                    </div>
                    <div className={classes["input-control"]}>
                        <button onClick={handleSubmit} className={classes["register-btn"]}>create account</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
