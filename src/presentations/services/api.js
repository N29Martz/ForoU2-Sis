import axios from 'axios';

const API_URL = 'http://192.168.1.38:5137';

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
    if (error.response) {
      // La solicitud fue hecha y el servidor respondió con un código de estado
      // que cae fuera del rango de 2xx
      console.error('Datos del error:', error.response.data);
      console.error('Estado del error:', error.response.status);
      console.error('Cabeceras del error:', error.response.headers);
    } else if (error.request) {
      // La solicitud fue hecha pero no se recibió respuesta
      console.error('Error de solicitud:', error.request);
    } else {
      // Algo sucedió en la configuración de la solicitud que desencadenó un error
      console.error('Error de configuración:', error.message);
    }
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
