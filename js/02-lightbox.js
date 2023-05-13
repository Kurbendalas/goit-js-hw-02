import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryItemTemplate = ({ original, preview, description }) => {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </li>
  `;
};

const galleryRef = document.querySelector(".gallery");

const galleryMarkup = galleryItems.reduce((acc, item) => {
  return acc + galleryItemTemplate(item);
}, "");

galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
