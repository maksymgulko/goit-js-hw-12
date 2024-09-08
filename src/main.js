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
const loadMore = document.querySelector('.load-more');
const gallery = document.querySelector('.image-gallery');

submitForm.addEventListener('submit', handleSubmit);
loadMore.addEventListener('click', handleLoadMore);

let page = 1;
let searchResult = '';
loadMore.style.display = 'none';

function handleSubmit(event) {
  gallery.innerHTML = '';
  event.preventDefault();
  const form = event.target;
  searchResult = form.elements.picture.value.trim();
  loader.style.display = 'inline-block';
  imageFetch(searchResult, page)
    .then(response => {
      loader.style.display = 'none';
      if (response.hits.length > 0) {
        gallery.insertAdjacentHTML('beforeend', renderImages(response));
        loadMore.style.display = 'block';
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

function handleLoadMore() {
  const picture = document
    .querySelector('.image-gallery')
    .lastElementChild.getBoundingClientRect();
  page++;
  loader.style.display = 'inline-block';
  imageFetch(searchResult, page).then(response => {
    loader.style.display = 'none';
    gallery.insertAdjacentHTML('beforeend', renderImages(response));
    window.scrollBy({
      top: picture.bottom,
      behavior: 'smooth',
    });
  });
}
