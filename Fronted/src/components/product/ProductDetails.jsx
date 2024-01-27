import React, { useEffect, useState } from 'react'
import ProductDetailDesign from '../../design/ProductDetailDesign'
import { useParams } from 'react-router-dom'
import { productDetailAPI } from '../api/productApi'
import Loader from '../utils/Loader'

function ProductDetails() {

  const {productId} = useParams()
  const [productDetail,setProductDetail] = useState(null)
  const [loader,setLoader] = useState(true)
  
  useEffect(()=>{

    productDetailAPI(productId)
    .then((data)=>{
      // console.log("data ",data)
      if(data?.data){
        
      setProductDetail(data?.data)

   
      setLoader(false)
      }
    })
    .catch((err)=>{
      console.log("error ",err)
    })

  },[])


  return (
    <div>

      {
        loader?<Loader/>:
        <ProductDetailDesign detail={productDetail}   />
      }
        
      
    </div>
  )
}

export default ProductDetails
