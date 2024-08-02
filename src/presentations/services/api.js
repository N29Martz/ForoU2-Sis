import axios from 'axios';

const API_URL = 'http://192.168.0.105:5137';

export const uploadPhoto = async photo => {
  const formData = new FormData();
  formData.append('file', {
    uri: photo.uri,
    type: photo.type,
    name: photo.fileName || 'photo.jpg',
  });

  try {
    const response = await axios.post(
      `${API_URL}/api/cloudinary/upload`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error('Error al cargar la foto:', error);
    throw error;
  }
};

export const getPhotos = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/cloudinary`);
    return response.data;
  } catch (error) {
    console.error('Error fetching photos:', error);
    throw error;
  }
};
