import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const createGalleryItem = ({ preview, original, description }) => `
  <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
`;

gallery.insertAdjacentHTML(
  "beforeend",
  galleryItems.map(createGalleryItem).join("")
);

const galleryItemsElements = gallery.querySelectorAll(".gallery__item");

galleryItemsElements.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    basicLightbox.create(`<img src="${event.target.src}">`).show();
  });
});
