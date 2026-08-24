document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.querySelector('.search-bar input');
  const appCards = document.querySelectorAll('.app-card');

  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();

    appCards.forEach((card) => {
      const appTitle = card.querySelector('.app-info h3').textContent.toLowerCase();
      const appCategory = card.querySelector('.app-category').textContent.toLowerCase();

      // Vérifie si le nom ou la catégorie correspond à la recherche
      if (appTitle.includes(searchTerm) || appCategory.includes(searchTerm)) {
        card.style.display = 'flex';
        card.style.animation = 'fadeIn 0.4s ease';
      } else {
        card.style.display = 'none';
      }
    });
  });
});