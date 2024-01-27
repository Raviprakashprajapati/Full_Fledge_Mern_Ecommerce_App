import axios from "axios";

const userBaseURL = '/api/v1/users'

export const getCurrentUserAPI = async(id) =>{
    try {
        const response = await axios.get(`${userBaseURL}/current-user/${id}`)
        return response.data
        
    } catch (error) {
        throw error;        
    }
}

export const loginUserAPI = async(loginData) =>{
    try {
        const response = await axios.post(`${userBaseURL}/login`,loginData)
        return response.data
    } catch (error) {
        throw error;        
    }
}

export const logoutAPI = async() =>{
    try {
        const response = await axios.post(`${userBaseURL}/logout`)
        return response.data
        
    } catch (error) {
        throw error        
    }
}

export const  registerUserAPI = async(userData) =>{
    try {
        const response = await axios.post(`${userBaseURL}/register`, userData);
        return response.data;
      } catch (error) {
        throw error;
      }
}


export const  changeUserPasswordAPI = async(data) =>{
    try {

        const response = await axios.post(`${userBaseURL}/change-password`, data);
        return response.data;
        
    } catch (error) {
        throw error
    }
}

export const updateUserAccountAPI = async(data) =>{
    try {

        const response = await axios.post(`${userBaseURL}/update-account`,data)
        return response.data
        
    } catch (error) {
        throw error 
    }
}

export const updateUserAvatarAPI = async(data) =>{
    try {

        const response = await axios.patch(`${userBaseURL}/avatar`,data)
        return response.data
        
    } catch (error) {
        throw error
    }
}

export const deactivateUserAPI = async() =>{
    try {
        const response = await axios.delete(`${userBaseURL}/delete-current-user`)
        return response.data
        
    } catch (error) {
        throw error
    }
}



//feedback
export const feedbackUserAPI = async(body) =>{
    try {
        const response = await axios.post(`${userBaseURL}/feedback`,body)
        return response.data
        
    } catch (error) {
        throw error
    }
}


export const GetFeedbackUserAPI = async() =>{
    try {
        const response = await axios.get(`${userBaseURL}/get-feedback`)
        return response.data
        
    } catch (error) {
        throw error
    }
}

