import React,{createContext,useState} from 'react'

const AccountContext = createContext()

const defaultUser = {
    acces:"",
    email:"",
    refresh:"",
    user_id:""
}

const AccountProvider = ({children}) => {
    const [userDetails, setUserDetails] = useState(localStorage.getItem("userDetails") ? JSON.parse(localStorage.getItem("userDetails")) : defaultUser )

    const loginUser = (data) => {
        setUserDetails(data)
        localStorage.setItem("userDetails",JSON.stringify(data))
    }

    const logoutUser = () => {
        setUserDetails(defaultUser)
        localStorage.removeItem("userDetails")
    }

    return (
        <AccountContext.Provider
            value={{userDetails,loginUser,logoutUser}}
        >
            {children}
        </AccountContext.Provider>
    )
}

export {AccountContext,AccountProvider }