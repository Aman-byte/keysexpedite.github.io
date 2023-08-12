const images = document.querySelectorAll('.image');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentImageIndex = 0;

function showImage(index) {
  images.forEach(image => {
    image.style.display = 'none';
  });
  images[index].style.display = 'block';
}

prevButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage(currentImageIndex);
});

nextButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
});

// Show the initial image
showImage(currentImageIndex);
