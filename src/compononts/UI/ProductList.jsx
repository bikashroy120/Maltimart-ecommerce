import React from 'react'
import ProductCart from './ProductCart'

const ProductList = ({products}) => {
  return (
    <>
      {products?.map((item,index)=>{
        return(
          <ProductCart item = {item} key={index}/>
        )
      })}
    </>
  )
}

export default ProductList