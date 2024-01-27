import React, { useEffect, useState } from 'react'
import AdminProductsDesign from '../../design/AdminProductsDesign'
import { adminGetAllProductsAPI } from '../api/adminApi'
import Loader from '../utils/Loader'

function AdminProducts() {

  const [product,setProduct] = useState()

  useEffect(()=>{

    adminGetAllProductsAPI()
    .then((data)=>{
      console.log(data)
      if(data){
        setProduct(data)
      }
    })
    .catch((err)=>{
      console.log(err)
    })

  },[])

  return (
    <div>
      {
        product?
        <AdminProductsDesign product={product.data} />
        :
        <Loader/>
      }
    </div>
  )
}

export default AdminProducts
