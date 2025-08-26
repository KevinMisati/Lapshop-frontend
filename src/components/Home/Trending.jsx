import TrendingClient from './TrendingClient'
const Trending = async() => {
    console.log(process.env.NEXT_PUBLIC_API_URL,"hello process.env.NEXT_PUBLIC_API_URL")
    let topSelling = []
    try {
        const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products/`,
        {cache:'no-store'}
        )
        if(!res.ok){
            return <div>Failed to load trending products.</div>
        }
        topSelling = await res.json()
    } catch (error) {
        console.log(error,"hello error")
    }

  return <TrendingClient topSelling={topSelling} />
}

export default Trending