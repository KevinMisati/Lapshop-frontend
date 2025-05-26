import React from 'react'
import Banner from '../components/Home/Banner'
import Trending from '../components/Home/Trending'

import classes from "./home.module.css"
import Categories from '../components/Home/Categories'
const Home = () => {

  return (
        <div>
        <div>
          <Banner />
        </div>
        <div>
          <Trending />
        </div>
          <Categories />
        </div>
    )
}

export default Home
