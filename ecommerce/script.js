async function fetchCategories() {
  try {
      let response = await fetch('https://api.escuelajs.co/api/v1/categories');
      let categories = await response.json();


      let limitedCategories = categories.slice(0, 5);
      let categoryDropdown = document.getElementById('categoryDropdown');

      limitedCategories.forEach(category => {
          categoryDropdown.innerHTML += `
              <li><a class="dropdown-item" href="#" data-category-id="${category.id}">${category.name}</a></li>
          `;
      });


      let dropdownItems = categoryDropdown.querySelectorAll('.dropdown-item');
      dropdownItems.forEach(item => {
          item.addEventListener('click', function(event) {
              event.preventDefault();
              let categoryId = this.getAttribute('data-category-id');
              fetchProductsByCategory(categoryId);
          });
      });

  } catch (error) {
      console.error('Error fetching categories:', error);
  }
}
