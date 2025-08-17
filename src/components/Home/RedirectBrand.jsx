"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const RedirectBrand = ({brand,classes}) => {
  const router = useRouter()
  const handleRedirect = (brand) => {
        router.push("/store",{
            state:{
                brandId:brand.id
            }
        })
    }
  return (
    <div onClick={() => handleRedirect(brand)} className={classes["brand-card"]}>
        <img alt={brand.name} src={brand.image} />
    </div>
  )
}

export default RedirectBrand