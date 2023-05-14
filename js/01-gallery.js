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
  const clickedElement = event.target;

  if (
    clickedElement.tagName !== "IMG" ||
    !clickedElement.src.endsWith(".png")
  ) {
    return;
  }

  const galleryItem = clickedElement.closest(".gallery__item");

  basicLightbox
    .create(`<img src="${clickedElement.src}" alt="${clickedElement.alt}">`, {
      onShow: (instance) => {
        setTimeout(() => {
          const imageElement = instance.element().querySelector("img");
          const captionElement = document.createElement("div");
          captionElement.classList.add("caption");
          captionElement.textContent = imageElement.alt;
          instance.element().appendChild(captionElement);
        }, 250);
      },
    })
    .show();
});
