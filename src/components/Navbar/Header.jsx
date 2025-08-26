"use client"
import classes from './Header.module.css'
import CartLink from './CartLink'
import Link from 'next/link'
import { useSelector} from "react-redux"
import { FaUser } from "react-icons/fa";

const Header = () => {
    const userDetails = useSelector((state) => state.account)
    return (
        <header className={classes["header-container"]}>
            <div className={classes["header"]}>

            <div className={classes["logo-and-store-links-container"]}>
                <div className={classes.logo}>
                    <h3>
                        <Link className={classes["nav-link"]} href="/">LapShop</Link>
                    </h3>
                    
                
            </div>
            {/* <nav className={classes.logo}>
                <Link className={classes["nav-link"]} href="/store">Store</Link>
            </nav> */}
            </div>
            

            <div className={classes["account-and-cart"]}>
                <nav className={classes.logo}>
                    <Link className={classes["nav-link"]} href="/store">Store</Link>
                </nav>
                <div className={classes.cart}>
                    <CartLink />
                </div>
                <div className={classes.account}>
                    {
                        !userDetails.user_id ?
                        <Link className={classes["nav-link"]} href={`/account/login`}>Login</Link>
                        :
                        <Link className={classes["nav-link"]} href={`/account`}>
                            <FaUser className="text-xl text-brand-primary" />
                        </Link>
                    } 
                    
                </div>
            </div>
            
            </div>
        </header>
    )
}

export default Header
