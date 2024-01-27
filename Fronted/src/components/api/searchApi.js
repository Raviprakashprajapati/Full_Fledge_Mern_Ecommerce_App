import axios from "axios"


const searchBaseURL = '/api/v1/products/search'

export const searchProductByReqAPI = async(search)=>{
    try {
        const response = await axios.get(`${searchBaseURL}/req/${search}`)
        return response.data
        
    } catch (error) {
        throw error
    }
}


export const searchProductByEletronics = async() =>{
    try {

        const response = await axios.get(`${searchBaseURL}/eletronics`)
        return response.data
        
    } catch (error) {
        throw error
    }
}

export const searchProductByClothing = async() =>{
    try {

        const response = await axios.get(`${searchBaseURL}/clothing`)
        return response.data
        
    } catch (error) {
        throw error
    }
}


export const searchProductByAny = async(body) =>{
    try {
        const response = await axios.post(`${searchBaseURL}/any`,body)
        return response.data
        
    } catch (error) {
        throw error
    }
}

export const searchProductByInput = async(input) =>{
    try {
        const response = await axios.get(`${searchBaseURL}/${input}`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const searchAllProduct = async() =>{
    try {
        const response = await axios.get(`${searchBaseURL}/all-products`)
        return response.data
    } catch (error) {
        throw error
    }
}