import MostLovedClient from './MostLovedClient'

const MostLoved = async() => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products/?mostLoved=true`,
        {cache:'no-store'}
    )
    if(!res.ok){
        return <div>Failed to load trending products.</div>
    }

    const mostLoved = await res.json()

    return <MostLovedClient mostLoved={mostLoved} />
}

export default MostLoved
