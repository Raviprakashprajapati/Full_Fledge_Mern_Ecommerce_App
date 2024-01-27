import axios from "axios";

const productBaseURl = '/api/v1/products'

export const getUserReviewsAPI = async() =>{

    try {

        const response = await axios.get(`${productBaseURl}/myreviews`)
        return response.data
        
    } catch (error) {
        throw error
    }

}


//later

export const allProductsAPI = async() =>{
    try {
        const response = await axios.get(`${productBaseURl}/all-product`)
        return  response.data
        
    } catch (error) {
        throw error
    }
}

export const publicDashboardAPI = async()=>{
    try {
        const response = await axios.get(`${productBaseURl}/public-dashboard`)
        return response.data
    } catch (error) {
        throw error
    }
}



export const productDetailAPI = async(id) =>{
    try {
        
        const response = await axios.get(`${productBaseURl}/product/${id}`)
        return response.data

    } catch (error) {
        throw error
    }
}

export const productReviewsAPI = async(productId) =>{
    try {

        const response = await axios.get(`${productBaseURl}/reviews/${productId}`)
        return response.data
        
    } catch (error) {
        throw error
    }
}

export const addProductReviewAPI = async(data) =>{
    try {
        //data->{productId,comment,rating}
        const response = await axios.post(`${productBaseURl}/add-review`,data)
        return response.data
        
    } catch (error) {
        throw error
    }
}

export const deleteProductReviewAPI = async(reviewId) =>{
    try {

        const response = await axios.delete(`${productBaseURl}/reviews`,reviewId)
        return response.data
        
    } catch (error) {
        throw error
    }
}



