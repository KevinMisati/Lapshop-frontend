import TrendingClient from './TrendingClient'
const Trending = async() => {
    let topSelling = []
    try {
        const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products/?trending=true`,
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