import React, { useEffect, useState } from 'react'
import ElectronicProductDesign from '../../../design/ElectronicProductDesign'
import { useParams } from 'react-router-dom'
import { searchProductByEletronics } from '../../api/searchApi'
import Loader from '../../utils/Loader'

function EletronicProduct() {

  const {category} = useParams()
  const [product,SetProduct] = useState(null)
  useEffect(()=>{

  if(category){
    searchProductByEletronics()
    .then((data) => {
      if (data) {
        console.log(data.data);
        SetProduct(data.data);

  
      }
    })
    .catch((err) => {
      console.log("err in eletronincs search ", err);
    });
  }

  },[])

  


  return (
    <div>
      {
        product? <ElectronicProductDesign product={product}  />:<Loader/>
      }
    </div>
  )
}

export default EletronicProduct
