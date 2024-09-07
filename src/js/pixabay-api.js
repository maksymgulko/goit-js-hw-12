const key = '45559560-5df08bb83c1629c82dd907879';

export default function imageFetch(searchResult) {
  const url =
    'https://pixabay.com/api/?key=' +
    key +
    '&q=' +
    encodeURIComponent(searchResult) +
    '&per_page=45' +
    '&image_type=photo' +
    '&orientation=horizontal' +
    '&safesearch=true';

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => console.log('Error:', error));
}
