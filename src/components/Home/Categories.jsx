import CategoriesClient from './CategoriesClient'

const Categories = async() => {
    let categories = []
    try {
        const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/categories/`,
        {cache:'no-store'}
        )
        if(!res.ok){
            return <div>Failed to load trending products.</div>
        }
        categories = await res.json()
    } catch (error) {
        console.log(error,"hello error")
    }
    return <CategoriesClient categories={categories} />
}

export default Categories
