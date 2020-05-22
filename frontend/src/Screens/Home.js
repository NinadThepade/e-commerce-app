import React from 'react'
import data from '../data'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <ul class="products">
        {data.products.map(product =>
          <li>
            <div class="product">
              <Link to={`/product/${product.id}`}>
                <img class="product-image" 
                  src={product.image} 
                  alt="product" />
              </Link>
              <div class="product-name">
                <Link to={`/product/${product.id}`}>{product.name}</Link>
              </div>
              <div class="product-brand">{product.brand}</div>
              <div class="product-price">Rs. {product.price}</div>
              <div class="product-rating">{product.rating} Stars ({product.reviewCount} Reviews)</div>
            </div>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Home
