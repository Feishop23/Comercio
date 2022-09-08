import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCartInfo from '../cart/ProductCartInfo'

const Cart = () => {
   const [cartProduct, setCartProduct] = useState()

   useEffect(()=>{

const config = {
   headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
   }
}

      const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
      axios.get(URL, config)
      .then(res => setCartProduct(res.data))
      .catch(err => console.log(err))
   },[])
   console.log(cartProduct)
  return (
 <section className="cart">
    <h2 className='cart_title'>Cart</h2>
    <ProductCartInfo/>
    <hr className='cart_hr' />
    <footer className='cart_footer'>
 <span className='cart_total-global-label'>Total:</span>
 <p className='cart_total-global-value'>1330</p>
 <button className="cart_btn">Checkout</button>
    </footer>
 </section>
    )
}

export default Cart