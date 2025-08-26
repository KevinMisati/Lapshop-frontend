import MostLovedClient from './MostLovedClient'

const MostLoved = async() => {
    let mostLoved
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/products/?mostLoved=true`,
            {cache:'no-store'}
        )
        console.log(res,"hello res here")
        if(!res.ok){
            return <div>Failed to load the most loved products.</div>
        }
        mostLoved = await res.json()
    } catch (error) {
        console.log(error,"hello error")
    }

    return <MostLovedClient mostLoved={mostLoved} />
}

export default MostLoved
