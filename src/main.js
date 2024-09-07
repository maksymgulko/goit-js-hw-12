import imageFetch from './js/pixabay-api';
import renderImages from './js/render-functions';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const lightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

const loader = document.querySelector('.loader');
const submitForm = document.querySelector('.form');
const gallery = document.querySelector('.image-gallery');

submitForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  gallery.innerHTML = '';
  event.preventDefault();
  const form = event.target;
  const searchResult = form.elements.picture.value.trim();
  loader.style.display = 'inline-block';
  imageFetch(searchResult)
    .then(response => {
      loader.style.display = 'none';
      if (response.hits.length > 0) {
        renderImages(response);
        lightbox.refresh();
      } else {
        iziToast.show({
          message: `❌ Sorry, there are no images matching your search query.`,
          position: 'topRight',
          backgroundColor: '#F44336',
          messageColor: '#fff',
        });
      }
    })
    .catch(error => {
      loader.style.display = 'none';
      iziToast.show({
        message: `❌ Сталася помилка: ${error.message}`,
        position: 'topRight',
        backgroundColor: '#F44336',
        messageColor: '#fff',
      });
    });
}
