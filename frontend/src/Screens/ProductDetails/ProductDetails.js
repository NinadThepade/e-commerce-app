import React from 'react'
import {Link} from 'react-router-dom'
import data from '../../data'

import './ProductDetails.css'

const ProductDetails = (props) => {
  const product = data.products.find((item) => item.id === props.match.params.id)

  return (
    <div>
      <div>
        <Link to="/">Back</Link>
      </div>
      <div className="product-detail">
        <h1>{product.name}</h1>
        <div className="details-image">
          <img src={product.image} alt="product" ></img>
        </div>
        <div className="details-info">
          <ul>
            <li>
              <h4>{product.name}</h4>
            </li>
            <li>
              {product.rating} Stars ({product.numReviews} Reviews)
            </li>
            <li>
              Price: <b>${product.price}</b>
            </li>
            <li>
              Description:
              <div>
                {product.description}
              </div>
            </li>
          </ul>
        </div>
        <div className="details-action">
          <ul>
            <li>
              Price: {product.price}
            </li>
            <li>
              Availability: {product.availability}
            </li>
            <li>
              Qty: <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </li>
            <li>
              <button className="button primary" >Add to Cart</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
