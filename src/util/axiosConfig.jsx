import axios from "axios";
import { BASE_URL } from "./apiEndpoints.js";




const axiosConfig = axios.create({
        baseURL: BASE_URL,
        headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
        },
});



// list of endpoints that do not require authentication header.
const excludeEndpoints = ["/login", "/register", "/status","/activate", "/health"];

// request interceptor to add the token to the headers
axiosConfig.interceptors.request.use((config) => {
        const shouldSkipToken = excludeEndpoints.some((endPoint) =>{
                return config.url?.includes(endPoint)
        });
        if(!shouldSkipToken){
                const accessToken = localStorage.getItem("token");
                if(accessToken){
                        config.headers.Authorization = `Bearer ${accessToken}`;
                }
        }
        return config;
},(error) => {
        return Promise.reject(error);
})

// response interceptor 
axiosConfig.interceptors.response.use((response) => {
        return response;
},(error) => {
        if(error.response){
                // handle 401 errors
                if(error.response.status === 401){
                        // redirect to login page or show a message
                        console.log("Unauthorized! Redirecting to login...");
                } else if (error.response.status === 500){
                        console.error("Server error! Please try again later.");
                } else if(error.code == "ECONNABORTED" || error.message === "Network Error"){
                        console.error("Request timed out! Please check your connection.");
                }
        }
        return Promise.reject(error);
});





export default axiosConfig;