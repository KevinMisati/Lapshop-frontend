import {useContext} from 'react'
import classes from './Header.module.css'
import CartLink from './CartLink'
import { Link }  from 'react-router-dom'
import { AccountContext } from '../../AccountContext'


const Header = ({isUserLoggedIn}) => {
    const {userDetails} = useContext(AccountContext)
    return (
        <header className={classes["header-container"]}>
            <div className={classes["header"]}>

            <div className={classes["logo-and-store-links-container"]}>
                <div className={classes.logo}>
                    <h3>
                        <Link className={classes["nav-link"]} to="/">LapShop</Link>
                    </h3>
                    
                
            </div>
            <nav className={classes.logo}>
                <Link className={classes["nav-link"]} to="/store">Store</Link>
                
            </nav>
            </div>
            

            <div className={classes["account-and-cart"]}>
                <div className={classes.cart}>
                    <CartLink />
                </div>
                <div className={classes.account}>
                    {
                        !userDetails.user_id ?
                        <Link className={classes["nav-link"]} to={`/account/login`}>Login</Link>
                        :
                        <Link className={classes["nav-link"]} to={`/account`}>
                            <i class="fas fa-user"></i>
                        </Link>
                    } 
                    
                </div>
            </div>
            
            </div>
        </header>
    )
}

export default Header
