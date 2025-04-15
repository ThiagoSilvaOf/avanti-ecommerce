const accordions = document.querySelectorAll('.accordion-section');

accordions.forEach(accordion => {
  const header = accordion.querySelector('.accordion-header');

  header?.addEventListener('click', () => {
    accordions.forEach(item => {
      if (item !== accordion) item.classList.remove('active');
    });

    accordion.classList.toggle('active');
  });
});