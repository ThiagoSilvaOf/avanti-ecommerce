const triggerDepartment = document.querySelector('.trigger-department');
const dropdownDepartment = document.querySelector('.dropdown-department');

if (triggerDepartment && dropdownDepartment) {
  const closeDropdown = () => {
    if (!dropdownDepartment.matches(':hover')) {
      dropdownDepartment.classList.remove('active');
    }
  };

  triggerDepartment.addEventListener('mouseenter', () => {
    dropdownDepartment.classList.add('active');
  });

  triggerDepartment.addEventListener('mouseleave', () => {
    setTimeout(closeDropdown, 100);
  });

  dropdownDepartment.addEventListener('mouseenter', () => {
    dropdownDepartment.classList.add('active');
  });

  dropdownDepartment.addEventListener('mouseleave', () => {
    dropdownDepartment.classList.remove('active');
  });
}
