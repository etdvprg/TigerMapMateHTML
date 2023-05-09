document.addEventListener("DOMContentLoaded", () => {
    const zoomInBtn = document.querySelector('.zoom-btn-in');
    const zoomOutBtn = document.querySelector('.zoom-btn-out');
    const mapImage = document.querySelector('.map-image');
    let scale = 1;
  
    zoomInBtn.addEventListener('click', () => {
      scale += 0.1;
      mapImage.style.transform = `scale(${scale})`;
    });
  
    zoomOutBtn.addEventListener('click', () => {
      scale -= 0.1;
      mapImage.style.transform = `scale(${scale})`;
    });
});

document.addEventListener("DOMContentLoaded", function() {
  const commuteDropdownButton = document.querySelector(".commute-dropdown-button");
  const commuteDropdown = document.querySelector(".commute-dropdown-container");

  commuteDropdownButton.addEventListener("click", function() {
  commuteDropdown.classList.toggle("visible");
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const pnrRouteDropdownButton = document.querySelector(".pnr-route-dropdown-button");
  const pnrRouteDropdown = document.querySelector(".pnr-route-dropdown-container");

  pnrRouteDropdownButton.addEventListener("click", function() {
    pnrRouteDropdown.classList.toggle("visible");
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const searchBar = document.querySelector(".ust-b-menu-search-bar input[type='text']");
  
  searchBar.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      window.location.href = "ust-buildings-list.html";
    }
  });
});
