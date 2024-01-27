import React from 'react'
import { Link } from 'react-router-dom'

function AdminProductDetailDesign({product}) {
  return (
    <div>
          <div className="max-w-2xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-3xl font-semibold">{product?.name}</h2>
        <p className="text-gray-600">{product?.category}</p>
      </div>
      <div>
        <Link to={`/admin/update-product/${product?._id}`} className='bg-green-400 p-4 rounded-lg font-bold text-slate-700 hover:bg-green-500 ' >Update</Link>
      </div>
      <br />

      <div className="flex flex-wrap gap-5 justify-center items-center">
        <div>
          <img src={product?.images[0]} alt={product?.name} className="w-[10rem] h-auto" />
        </div>
        <div>
          <img src={product?.images[1]} alt={product?.name} className="w-[10rem]  h-auto" />
        </div>
        <div>
          <img src={product?.images[2]} alt={product?.name} className="w-[10rem]  h-auto" />
        </div>

        <div>
          <p className="text-xl font-semibold text-primary">{product?.price}</p>
          <p className="text-gray-600">{product?.discount ? `Discount: ${product?.discount}` : ''}</p>
          <p className="text-gray-700 mt-4">{product?.description}</p>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">Additional Details</h3>
        <ul className="list-disc list-inside">
          <li>Brand: {product?.brand}</li>
          <li>Keywords: {product?.keywords}</li>
          <li>Warranty: {product?.warranty} years</li>
          <li>Age: {product?.age}</li>
          <li>Stock: {product?.stock}</li>
        </ul>
      </div>

      {product?.features && (
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Features</h3>
          <p className="text-gray-700">{product?.features}</p>
        </div>
      )}

      {product?.offer && (
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Offer</h3>
          <p className="text-gray-700">{product?.offer}</p>
        </div>
      )}

      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">Trending</h3>
        <p className="text-gray-700">{product?.trending ? 'Yes' : 'No'}</p>
      </div>

   
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">{product?.reviews?.length} Reviews</h3>
         
        </div>
    
    </div>

      
    </div>
  )
}

export default AdminProductDetailDesign
