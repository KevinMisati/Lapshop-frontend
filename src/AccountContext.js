import React,{createContext,useState} from 'react'

const AccountContext = createContext()

const AccountProvider = ({children}) => {
    const [userDetails, setUserDetails] = useState(localStorage.getItem("userDetails") ? JSON.parse(localStorage.getItem("userDetails")) : {
        acces:"",
        email:"",
        refresh:"",
        user_id:""
    })
    const loginUser = (data) => {
        setUserDetails(data)
    }

    return (
        <AccountContext.Provider
            value={{userDetails,loginUser}}
        >
            {children}
        </AccountContext.Provider>
    )
}

export {AccountContext,AccountProvider }