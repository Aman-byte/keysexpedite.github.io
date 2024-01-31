const items = [
    { name: 'Royal Kludge 84 Mechanical Keyboard', link: 'final keyboard/index.html' },
    { name: 'Razer Viper Mini Mouse', link: 'final keyboard/mouse.html' },
    { name: 'JWK Ultimate Black Switches', link: 'final keyboard/switches.html' }
  ];
  
  function performSearch() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = '';
  
    if (input.trim() !== '') {
      const filteredItems = items.filter(item => item.name.toLowerCase().includes(input));
      
      if (filteredItems.length > 0) {
        filteredItems.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = item.name;
          listItem.addEventListener('click', () => {
            window.location.href = item.link;
          });
          resultsContainer.appendChild(listItem);
        });
      } else {
        const noResultItem = document.createElement('li');
        noResultItem.textContent = 'No results found';
        resultsContainer.appendChild(noResultItem);
      }
    }
  }
  const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
