import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) => `
<li class="gallery-item">
  <a class="gallery-link" href=${original}>
    <img
      class="gallery-image"
      src=${preview}
      alt="${description}"
    />
  </a>
</li>
`).join('');
galleryRef.insertAdjacentHTML('beforeend', markup);

//Важливо! В атрибут alt треба брати значення ${description} у подвійні лапки "", інакще воно буде сприймати лише перше слово опису

let gallery = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, history: false });




console.log(galleryItems);
