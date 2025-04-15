const allCategories = document.querySelector('.all-categories');
const dropdownCategorias = document.querySelector('.dropdown-categorias');

if (allCategories && dropdownCategorias) {
  allCategories.addEventListener('mouseenter', () => {
    dropdownCategorias.classList.add('active');
  });

  allCategories.addEventListener('mouseleave', () => {
    if (!dropdownCategorias.matches(':hover')) {
      dropdownCategorias.classList.remove('active');
    }
  });

  dropdownCategorias.addEventListener('mouseleave', () => {
    dropdownCategorias.classList.remove('active');
  });
}