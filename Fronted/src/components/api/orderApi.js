import axios from "axios";

const orderBaseURL = '/api/v1/orders'

export const ordersUserAPI = async() =>{
    try {

        const response = await axios.get(`${orderBaseURL}/all-orders`)
        return response.data
        
    } catch (error) {
        throw error
    }
}


export const orderDetailAPI = async(id) =>{
    try {

        const response = await axios.get(`${orderBaseURL}/get-order/${id}`)
        return response.data
        
    } catch (error) {
        throw error
    }
}


export const addOrderAPI = async(data) =>{
    try {
        //{productId,quantity}
        const response = await axios.post(`${orderBaseURL}/add-order`,data)
        return response.data
        
    } catch (error) {
        throw error
    }
}

export const addCartToOrderAPI = async() =>{
    try {

        const response = await axios.post(`${orderBaseURL}/add-cart-order`)
        return response.data
        
    } catch (error) {
        throw error
    }
}


export const deleteParticularOrderAPI = async(orderId) =>{
    try {
       
        const response = await axios.delete(`${orderBaseURL}/delete-order/${orderId}`)
        return response.data
        
    } catch (error) {
        throw error
    }
}






