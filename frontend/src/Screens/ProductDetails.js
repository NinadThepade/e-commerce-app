import React from 'react'

const ProductDetails = (props) => {
  console.log(props.match.params.id)
  return (
    <div>
      Product Details Page
    </div>
  )
}

export default ProductDetails
