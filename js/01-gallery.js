import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryREf = document.querySelector(".gallery");

const imagesMarkup = galleryItems.map(({preview,original,description})=>
`<li class="gallery__item">
<a class="gallery__link" href="#">
<img class="gallery__image" src=${preview} alt="${description}" data-sourse="${original}" width="340" height="auto">
</a>`).join("");
galleryREf.insertAdjacentHTML("beforeend",imagesMarkup);

console.log(imagesMarkup);



const clickHandler = (event)=>{
    event.preventDefault();
    const instance = basicLightbox.create(`<img src="${event.target.dataset.sourse}" alt="${event.target.alt}" width="1280" height="auto">`)
    instance.show();
};


galleryREf.addEventListener("click",clickHandler);