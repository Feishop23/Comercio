import React from 'react'

const ProductPurchase = ({product}) => {
  return (
   <li>
    <h4 className=''>{product.title}</h4>
    <span className="card-purchase_quantity">{product.productsInCart.quantity}</span>
    <span className="card-purchase_price">{product.price}</span>
   </li>
  )
}

export default ProductPurchase