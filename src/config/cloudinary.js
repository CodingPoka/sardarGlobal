// Cloudinary configuration for client-side usage
const cloudinaryConfig = {
  cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
  apiKey: import.meta.env.VITE_CLOUDINARY_API_KEY,
  uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET, // You'll need to create this in Cloudinary dashboard
};

// Helper function to get Cloudinary URL
export const getCloudinaryUrl = () => {
  return `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/image/upload`;
};

// Helper function to upload image
export const uploadToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', cloudinaryConfig.uploadPreset);

  try {
    const response = await fetch(getCloudinaryUrl(), {
      method: 'POST',
      body: formData,
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Upload failed');
    }
    
    const data = await response.json();
    
    // Check if we got a valid response with secure_url
    if (!data.secure_url) {
      console.error('Cloudinary response:', data);
      throw new Error('No URL returned from Cloudinary. Check your upload preset settings.');
    }
    
    return data;
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw error;
  }
};

export default cloudinaryConfig;
