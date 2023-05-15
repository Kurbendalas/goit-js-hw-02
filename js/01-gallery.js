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

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  const clickedItem = event.target.closest(".gallery__item");
  if (!clickedItem) return;
  const imgSrc = clickedItem
    .querySelector(".gallery__image")
    .getAttribute("src");
  basicLightbox.create(`<img src="${imgSrc}">`).show();
});
