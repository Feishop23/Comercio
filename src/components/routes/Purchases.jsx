import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../utils/getConfig'
import  PurchaseCard  from '../purchases/PurchaseCard'

const Purchases = () => {
  const [purchases, setPurchases] = useState()
  
  useEffect(()=>{
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    axios.get(URL, getConfig())
    .then(res => setPurchases(res.data))
    .catch(err => console.log(err))
  },[])
  return (
    <div>Purchases
      <h2 className='purchase-title'>Purchases</h2>
      <div className='purchase-container'>
        {
          purchases?.map(purchase => (
            <PurchaseCard 
            key={purchase.id}
            purchase={purchase}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Purchases
