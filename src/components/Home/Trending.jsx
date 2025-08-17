import TrendingClient from './TrendingClient'
const Trending = async() => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products/?trending=true`,
        {cache:'no-store'}
    )
    if(!res.ok){
        return <div>Failed to load trending products.</div>
    }

    const topSelling = await res.json()

  return <TrendingClient topSelling={topSelling} />
}

export default Trending