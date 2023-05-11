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
  const card = document.getElementById(cardId);
  cardContainer.style.display = 'block';
  card.style.display = 'block';
  grayOut.style.display = 'block';
}

function hideCard() {
  cardContainer.style.display = 'none';
  grayOut.style.display = 'none';

  const cards = cardContainer.querySelectorAll('.card');
  cards.forEach(card => card.style.display = 'none');
}
listItems.forEach(listItem => {
  const cardId = listItem.getAttribute('data-card-id');

  listItem.addEventListener('click', () => {
    hideCard();
    showCard(cardId);
  });
});

grayOut.addEventListener('click', () => {
  hideCard();
});

});

document.addEventListener("DOMContentLoaded", function() {
  const restaurantCards = document.querySelectorAll('.restaurant-card');
  const restaurantListItems = document.querySelectorAll('.ust-e-list');
  const cardContainer = document.querySelector('.restaurant-card-container');

  for (let i = 0; i < restaurantListItems.length; i++) {
    const listItem = restaurantListItems[i];
    const cardIndex = parseInt(listItem.getAttribute('data-index'));
    const card = document.querySelector(`.restaurant-card.result-${cardIndex}`);

    listItem.addEventListener('click', () => {
      card.classList.toggle('visible');
      cardContainer.classList.add('active');
    });

    const closeButton = card.querySelector('.close-card-button');
    closeButton.addEventListener('click', () => {
      card.classList.remove('visible');
      cardContainer.classList.remove('active');
    });
  }
});

document.addEventListener("DOMContentLoaded", function() {
const restaurantListItems = document.querySelectorAll('.ust-e-list');
const restaurantCardContainer = document.getElementById('restaurant-card-container');
restaurantListItems.forEach(function(item) {

  item.addEventListener('click', function() {
    const rcardId = item.getAttribute('data-rcard-id');
    const restaurantCard = document.getElementById(`rcard-${rcardId}`);

    restaurantCardContainer.style.display = 'block';
    restaurantCard.style.display = 'block';

    const closeButton = restaurantCard.querySelector('.close-rcard-button');
    closeButton.addEventListener('click', function() {
      restaurantCardContainer.style.display = 'none';
      restaurantCard.style.display = 'none';
    });
  });
});
});




