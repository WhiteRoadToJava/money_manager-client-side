

export const BASE_URL = 'https://money-manager-2-19to.onrender.com/api/v1.0';
const CLOUDINARY_CLOUD_NAME = 'dzznogcvf'

export const API_ENDPOINTS = {
        LOGIN: '/login',
        REGISTER: '/register',
        UPLOAD_IMAGE: `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
        ADD_CATEGORY: `/categories`,
        GET_USER_INFO: '/profile',
}