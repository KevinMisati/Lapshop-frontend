import React,{useState} from 'react'
import classes from './MobileHeader.module.css'
import { Link } from 'react-router-dom'
import CartLink from './CartLink'

const Header = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false)
    const handleMenuToggling = () => {
        setIsMenuOpen(!isMenuOpen)
        document.body.style.overflow =isMenuOpen ? "" : "hidden" 
    }
    return (
        <header className={classes["header-container"]}>
            <div className={classes["header"]}>

            <div className={classes["logo-and-store-links-container"]}>
                <div className={classes.logo}>
                        <Link className={classes["nav-link-logo"]} to="/">
                    <h3>LapShop</h3>
                    </Link>
                </div>
                <nav className={classes.logo}>
                    <Link className={classes["nav-link"]} to="/store">Store</Link>
                </nav>
            </div>

            <div className={classes["cart-and-hurmbuger-container"]}>
                <div>
                    <CartLink />
                </div>

                <div onClick={handleMenuToggling} className={classes.hurmbuger}>
                    <span className={classes["first-line"]}></span>
                    <span className={classes["second-line"]}></span>
                    <span className={classes["third-line"]}></span>
                    
                </div>
            </div>

            <section className={classes[ isMenuOpen ? "" : "side-menu-toggler"]}>
                <section className={classes["side-menu"]}>

                    <div className={classes["menu-and-header"]}>
                        <div>
                            <h3>Menu</h3>
                        </div>
                        <div onClick={handleMenuToggling } className={classes.hurmbuger}>
                            <span className={classes["first-line"]}></span>
                            
                            <span className={classes["third-line"]}></span>
                        
                        </div>
                </div>

                <nav className={classes.menu}>
                    <li>
                        <Link onClick={handleMenuToggling }   className={classes["nav-link"]} to="/store">Store</Link>
                        
                    </li>
                    <li>
                        <Link onClick={handleMenuToggling }  className={classes["nav-link"]} to="/account/login">Login</Link>
                    </li>
                </nav>
                </section>
            </section>

        
            
            </div>
        </header>
    )
}

export default Header
