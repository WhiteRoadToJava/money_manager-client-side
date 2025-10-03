import { API_ENDPOINTS } from "./apiEndpoints"

const CLOUDINARY_UPLOAD_PRESET = "money_manager";

const uploadProfileImage = async(image) => {
        if (!image) {
                // If no image is provided, we can either throw an error or return null.
                // Returning null might be more graceful for optional profile pictures.
                return null;
        }

        const formData = new FormData()
        formData.append('file', image)
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)

        try{
                const response = await fetch(API_ENDPOINTS.UPLOAD_IMAGE,{
                        method:"POST",
                        body:formData,
                })
                if(!response.ok){
                        const errorData = await response.json();
                        throw new Error(`Cloudinary upload failed: ${errorData.error.message || response.statusText}`);
                }
                const data = await response.json();
                console.log("Image upload successful");
                return data.secure_url;
        }catch(error){
                console.error("Error uploading image to Cloudinary:", error);
                // Re-throwing the error allows the calling component to handle it (e.g., show a toast notification)
                throw error;
        }
}

export default uploadProfileImage;