const searchInput = document.querySelector('#searchInput');
const searchButton = document.querySelector('#searchButton');
const searchMessage = document.querySelector('#searchMessage');

let messageTimer; 

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.trim();

  if (searchTerm !== '') {
    searchMessage.textContent = `Você buscou por: '${searchTerm}'`;
    searchInput.value = '';
    searchInput.focus();

    clearTimeout(messageTimer); 

    messageTimer = setTimeout(() => {
      searchMessage.textContent = '';
    }, 5000); 
  } else {
    searchMessage.textContent = '';
  }
});
