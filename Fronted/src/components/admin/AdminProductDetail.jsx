import React, { useEffect, useState } from 'react'
import AdminProductDetailDesign from '../../design/AdminProductDetailDesign'
import { useNavigate, useParams } from 'react-router-dom'
import { productDetailAPI } from '../api/productApi'
import Loader from '../utils/Loader'

function AdminProductDetail() {

    const [product,setProduct] = useState()
    const {productId} = useParams()
    const navigate = useNavigate()
   
    useEffect(()=>{

        productDetailAPI(String(productId))
        .then((data)=>{
            if(data){
                    setProduct(data.data)
            }
        })
        .catch((err)=>{
            console.log("error", err)
        })

    },[])

  return (
    <div>
        {
            product?
            <AdminProductDetailDesign product={product} />
      :<Loader/>    
        }
    </div>
  )
}

export default AdminProductDetail
