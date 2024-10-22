import React from "react";
import classes from "./App.module.css"
import Home from "./Pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer"
import {
  Routes,
  Route
} from "react-router-dom";

import Account from "./Pages/Account"
import Logout from "./components/Account/Logout"
import Login from "./components/Account/Login"
import SignUp from "./components/Account/SignUp"
import ResetPassword from "./components/Account/ResetPassword";

import Cart from "./Pages/Cart"
import Store from "./Pages/Store"
import ProductInfo from "./Pages/ProductInfo";
import {CartProvider} from "./Context"
import { AccountProvider } from "./AccountContext";
import CheckOut from "./Pages/CheckOut";
import ScrollToTop from "./components/ScrollToTop";
import ThankYou from "./Pages/ThankYou";
import Error404 from "./Pages/Error404"

const App = () => {
  
  return(
    <AccountProvider>
      <CartProvider>
      <div className={classes.app}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route  path={`/account`} element={<Account />} >
            <Route exact path={""} element={<Logout />} />
            <Route exact path={"login"} element={<Login />} />
            <Route path={"signup"} element={<SignUp />} />
            <Route path={"reset-password/"} element={<ResetPassword />} />
            <Route path={"reset-password/:uid/:token"} element={<ResetPassword />} />
          </Route>
          <Route  path="/cart" element={<Cart />} />
          <Route exact path="/store" element={<Store />} />
          <Route exact path="/store/product/:id" element={<ProductInfo />} />
          <Route path="/checkout" element={<CheckOut />} ></Route>
          <Route path="/thankyou" element={<ThankYou />} ></Route>
          <Route exact path="/" element={<Home />} />
          <Route element={<Error404 />} />
        </Routes>
        
        <Footer />
      </div>
    </CartProvider>
    </AccountProvider>
  )
}

export default App

