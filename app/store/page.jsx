'use client'
import { Suspense} from 'react'
import Loader from '@/components/Loader'
import Store from '@/components/Store/Store'

const Page = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Store />
        </Suspense>
    )
}

export default Page
