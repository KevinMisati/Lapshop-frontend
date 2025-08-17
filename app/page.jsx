import Banner from '@/components/Home/Banner'
import Categories from '@/components/Home/Categories'
import Trending from '@/components/Home/Trending'
import MostLoved from '@/components/Home/MostLoved'
import Brands from '@/components/Home/Brands'

const Home = () => {
  return (
        <>
          <Banner />
          <Trending />
          <Categories />
          <MostLoved />
          <Brands />
        </>
    )
}
export default Home
