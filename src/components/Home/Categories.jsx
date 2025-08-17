import CategoriesClient from './CategoriesClient'

const Categories = async() => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/categories/`,
        {cache:'no-store'}
    )
    if(!res.ok){
        return <div>Failed to load trending products.</div>
    }

    const categories = await res.json()
    return <CategoriesClient categories={categories} />
}

export default Categories
