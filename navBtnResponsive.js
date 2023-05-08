document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector('.navbar-button');
    const container = document.querySelector('.nav-dropdown-container');
  
    button.addEventListener('click', function() {
        container.classList.toggle('visible');
    });
  });
  