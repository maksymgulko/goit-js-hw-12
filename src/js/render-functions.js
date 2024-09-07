export default function renderImages(images) {
  const gallery = document.querySelector('.image-gallery');
  gallery.innerHTML = '';
  const markup = images.hits
    .map(image => {
      const {
        webformatURL,
        largeImageURL,
        tags,
        views,
        downloads,
        likes,
        comments,
      } = image;
      return `
          <li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
              <img 
                class="gallery-image" 
                src="${webformatURL}"
                alt="${tags}"
              />
            </a>
            <div class="overlay">
            <div class="info">
                <div class="overlay-item">Likes<br>${likes}</div>
                <div class="overlay-item">Views<br>${views}</div>
                <div class="overlay-item">Comments<br>${comments}</div>
                <div class="overlay-item">Downloads<br>${downloads}</div>
                </div>
            </div>
          </li>`;
    })
    .join('');
  gallery.innerHTML = markup;
}
