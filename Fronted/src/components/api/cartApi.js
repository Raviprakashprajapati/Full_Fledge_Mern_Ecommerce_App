import axios from "axios";


const productBaseURL = '/api/v1/products'

export const cartsUserAPI = async()=>{
    try {
        const response = await axios.get(`${productBaseURL}/get-cart`)
        return response.data
        
    } catch (error) {
        throw error
    }
}

export const addToCartAPI = async(id) =>{
    try {

        const response = await axios.post(`${productBaseURL}/add-to-cart/${id}`)
        return response.data
        
    } catch (error) {
        throw error
    }
}


export const removeProductFromCartAPI = async(id) =>{
    try {

        const response = await axios.patch(`${productBaseURL}/remove-from-cart/${id}`)
        return response.data
        
    } catch (error) {
        throw error
    }
}


//later


export const incrementProductFromCartAPI = async(productId) =>{
    try {

        const response = await axios.patch(`${productBaseURL}/get-cart`,productId)
        return response.data
        
    } catch (error) {
        throw error
    }
}

export const decrementProductFromCartAPI = async(productIdForDecrement) =>{
    try {

        const response = await axios.patch(`${productBaseURL}/decrement-cart`,productIdForDecrement)
        return response.data
        
    } catch (error) {
        throw error
    }
}





