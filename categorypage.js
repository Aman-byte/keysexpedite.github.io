function openLink(url) {
    window.location.href = url;
}

// Get all elements with the class "product"
const productDivs = document.querySelectorAll('.product');

// Attach a click event listener to each "product" div
productDivs.forEach(div => {
    div.addEventListener('click', () => {
        const link = div.getAttribute('data-link');
        openLink(link);
    });
});

const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');
    
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });