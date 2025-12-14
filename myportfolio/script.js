// Basic JavaScript for interactivity (for example, image lightbox)
const galleryImages = document.querySelectorAll('.gallery-img');
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
lightbox.style.display = 'none';
document.body.appendChild(lightbox);

const closeLightbox = document.createElement('span');
closeLightbox.innerHTML = '&times;';
closeLightbox.id = 'close-lightbox';
lightbox.appendChild(closeLightbox);

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        const img = document.createElement('img');
        img.src = image.dataset.image;
        img.alt = image.alt;
        lightbox.appendChild(img);
        lightbox.style.display = 'block';
    });
});

closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});
