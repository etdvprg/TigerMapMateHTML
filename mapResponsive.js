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

document.addEventListener('DOMContentLoaded', () => {
  const listItems = document.querySelectorAll('.ust-b-list');
const cardContainer = document.getElementById('card-container');
const grayOut = document.createElement('div');

grayOut.className = 'gray-out';
document.body.appendChild(grayOut);

function showCard(cardId) {
  // Show the card with the given ID
  const card = document.getElementById(cardId);
  cardContainer.style.display = 'block';
  card.style.display = 'block';

  // Gray out the rest of the website
  grayOut.style.display = 'block';
}

function hideCard() {
  // Hide the card and un-gray the website
  cardContainer.style.display = 'none';
  grayOut.style.display = 'none';

  // Hide all the cards
  const cards = cardContainer.querySelectorAll('.card');
  cards.forEach(card => card.style.display = 'none');
}

// Add click event listeners to the list items
listItems.forEach(listItem => {
  const cardId = listItem.getAttribute('data-card-id');

  listItem.addEventListener('click', () => {
    hideCard();
    showCard(cardId);
  });
});

// Add click event listener to the gray out element
grayOut.addEventListener('click', () => {
  hideCard();
});

});
