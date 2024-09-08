import axios from 'axios';

const key = '45559560-5df08bb83c1629c82dd907879';

export default async function imageFetch(
  searchResult,
  page = 1,
  per_page = 15
) {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?key=${key}&q=${searchResult}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${per_page}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
