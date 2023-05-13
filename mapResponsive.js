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
  const commuteDropdownButton = document.querySelector("  .commute-dropdown-button-espana");
  const commuteDropdown = document.querySelector(".commute-dropdown-container-espana");

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
  const restaurantListItems = document.querySelectorAll('.ust-e-list');
  const restaurantCardContainer = document.getElementById('restaurant-card-container');
  let currentRestaurantCard = null;

  restaurantListItems.forEach(function(item) {
    item.addEventListener('click', function() {
      const rcardId = item.getAttribute('data-rcard-id');
      const restaurantCard = document.getElementById(`rcard-${rcardId}`);

      if (currentRestaurantCard) {
        currentRestaurantCard.style.display = 'none';
      }

      restaurantCardContainer.style.display = 'block';
      restaurantCard.style.display = 'block';

      const closeButton = restaurantCard.querySelector('.close-rcard-button');
      closeButton.addEventListener('click', function() {
        restaurantCardContainer.style.display = 'none';
        restaurantCard.style.display = 'none';
      });

      currentRestaurantCard = restaurantCard;
    });
  });
});


document.addEventListener("DOMContentLoaded", function() {
  // Get the map image element
const mapImage = document.querySelector(".map-image");

// Get all the ust-e-list elements
const ustEListItems = document.querySelectorAll(".ust-e-list");

// Add a click event listener to each ust-e-list element
ustEListItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Get the value of the data-img-src attribute of the selected ust-e-list item
    const imgSrc = item.getAttribute("data-img-src");
    // Update the src attribute of the map image element with the selected image src
    mapImage.src = imgSrc;
  });
});
})

document.addEventListener("DOMContentLoaded", function() {
  const closeButtons = document.querySelectorAll('.close-rcard-button');

  closeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const mapImage = document.querySelector('.map-image');
      mapImage.setAttribute('src', 'images/MarkedMap.png');
    });
  });
  
})

document.addEventListener("DOMContentLoaded", function() {
  const bookmarkAddButton = document.querySelector('.bookmark-add');
const bookmarkAddForm = document.querySelector('.bookmark-add-form');
const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

bookmarkAddButton.addEventListener('click', () => {
  bookmarkAddForm.style.display = 'block';
  overlay.style.display = 'block';
});

document.getElementById('cancel-b-btn').addEventListener('click', () => {
  bookmarkAddForm.style.display = 'none';
  overlay.style.display = 'none';
});

overlay.addEventListener('click', () => {
  bookmarkAddForm.style.display = 'none';
  overlay.style.display = 'none';
});
});


document.addEventListener("DOMContentLoaded", function() {

  const bookmarkListItems = document.querySelectorAll('.bookmark')
  const bookmarkCardContainer = document.querySelector('.bookmark-card-container');
  let currentCard;

  bookmarkListItems.forEach(function(item) {

    item.addEventListener('click', function() {
      const bcardId = item.getAttribute('data-bcard-id');
      const bookmarkCard = document.getElementById(`bcard-${bcardId}`);

      if (currentCard) {
        currentCard.style.display = 'none';
      }

      bookmarkCardContainer.style.display = 'block';
      bookmarkCard.style.display = 'block';
      currentCard = bookmarkCard;

      const closeButton = bookmarkCard.querySelector('.close-bcard-button');
      closeButton.addEventListener('click', function() {
        bookmarkCardContainer.style.display = 'none';
        bookmarkCard.style.display = 'none';
        currentCard = null;
      });

    });

  });

});


document.addEventListener("DOMContentLoaded", function() {
  const bookmarkEditButton = document.querySelector('.bookmark-edit');
  const bookmarkEditForm = document.querySelector('.bookmark-edit-form');
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  document.body.appendChild(overlay);

  bookmarkEditButton.addEventListener('click', () => {
    bookmarkEditForm.style.display = 'block';
  overlay.style.display = 'block';
  });

  document.getElementById('cancel-be-btn').addEventListener('click', () => {
    bookmarkEditForm.style.display = 'none';
    overlay.style.display = 'none';
  });
  
  overlay.addEventListener('click', () => {
    bookmarkEditForm.style.display = 'none';
    overlay.style.display = 'none';
  });

});

document.addEventListener("DOMContentLoaded", function() {
  // Get the map image element
const mapImage = document.querySelector(".map-image");

// Get all the ust-e-list elements
const bookmarks = document.querySelectorAll(".bookmark");

// Add a click event listener to each ust-e-list element
bookmarks.forEach((item) => {
  item.addEventListener("click", () => {
    // Get the value of the data-img-src attribute of the selected ust-e-list item
    const imgSrc = item.getAttribute("data-img-src");
    // Update the src attribute of the map image element with the selected image src
    mapImage.src = imgSrc;
  });
});
})

document.addEventListener("DOMContentLoaded", function() {
  const closeButtons = document.querySelectorAll('.close-bcard-button');

  closeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const mapImage = document.querySelector('.map-image');
      mapImage.setAttribute('src', 'images/MarkedMap.png');
    });
  });
  
})


document.addEventListener("DOMContentLoaded", function() {
  function getWeather() {
    const API_KEY = "pzRaENEiK4CDsS5IBItFg6BNzckGon2A";
    const CITY = "Manila";
    const API_URL = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${CITY}`;
  
    const weatherTemp = document.querySelector(".weather-temp");
  
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        const locationKey = data[0].Key;
        const CURRENT_CONDITIONS_URL = `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${API_KEY}&details=true`;
  
        return fetch(CURRENT_CONDITIONS_URL);
      })
      .then((response) => response.json())
      .then((data) => {
        const temp = data[0].Temperature.Metric.Value;
  
        weatherTemp.innerHTML = `${temp}°C`;
      });
  }
  
  window.onload = getWeather;

});