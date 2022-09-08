import React from 'react'
import ProductPurchase from './ProductPurchase'

 const PurchaseCard = ({purchase}) => {
    console.log(purchase)
  return (
    <article className="card-purchase">
        <h3 className='card-purchase_date'>{purchase.createAt}</h3>
<div className="card-purchase_body">
    {
     purchase.cart.products.map(product => (
<ProductPurchase key={product.id} product={product}/>
     ))
}
</div>
    </article>
  )
}
export default PurchaseCard