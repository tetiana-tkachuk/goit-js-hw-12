import axios from 'axios';

const API_KEY = '34730863-c268bffb7a5a82490d4aafc58';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export default async function getImagesByQuery(query, page) {
  const response = await axios.get('', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: 15,
    },
  });

  return response.data;
}
