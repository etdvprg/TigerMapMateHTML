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


document.addEventListener("mousedown", function(event) {
  console.log(event.button);
  if (event.button === 0) { // 0 corresponds to the left mouse button
    console.log("mouse down");
    isLeftMouseDown = true;
  }
});

// Event listener for mouse up
document.addEventListener("mouseup", function(event) {
  console.log(event.button);
  if (event.button === 0) {
    console.log("mouse up");
    isLeftMouseDown = false;
  }
});

/*
// Event listener for mouse move
document.addEventListener("mousemove", function(event) {
  if (isLeftMouseDown) {
    // Mouse is being held down and moving
    // Perform actions here
    console.log("Left mouse button is being held down");
  }
});
*/

/*
// Variables to store the previous mouse position
let prevMouseX = 0;
let prevMouseY = 0;

// Event listener for mouse movement
document.addEventListener("mousemove", handleMouseMove);

function handleMouseMove(event) {
  // Get the current mouse position
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  // Calculate the mouse delta
  const deltaX = mouseX - prevMouseX;
  const deltaY = mouseY - prevMouseY;

  // Update the previous mouse position
  prevMouseX = mouseX;
  prevMouseY = mouseY;

  // Do something with the mouse delta
  console.log("Mouse delta X: ", deltaX);
  console.log("Mouse delta Y: ", deltaY);
}
*/


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

document.addEventListener("DOMContentLoaded", function() {
  const restaurantCards = document.querySelectorAll('.restaurant-card');
  const restaurantListItems = document.querySelectorAll('.ust-e-list');
  const cardContainer = document.querySelector('.restaurant-card-container');

  for (let i = 0; i < restaurantListItems.length; i++) {
    const listItem = restaurantListItems[i];
    const cardIndex = parseInt(listItem.getAttribute('data-index'));
    const card = document.querySelector(`.restaurant-card.result-${cardIndex}`);

    // Add click event listener to each list item
    listItem.addEventListener('click', () => {
      // Toggle the card's visibility
      card.classList.toggle('visible');

      // Add a class to the card container to make it permanent
      cardContainer.classList.add('active');
    });

    // Add click event listener to the card's close button
    const closeButton = card.querySelector('.close-card-button');
    closeButton.addEventListener('click', () => {
      // Hide the card
      card.classList.remove('visible');

      // Remove the class from the card container to make it non-permanent
      cardContainer.classList.remove('active');
    });
  }
});

document.addEventListener("DOMContentLoaded", function() {
  // Get all the restaurant list items
const restaurantListItems = document.querySelectorAll('.ust-e-list');

// Get the restaurant card container
const restaurantCardContainer = document.getElementById('restaurant-card-container');

// Loop through all the restaurant list items
restaurantListItems.forEach(function(item) {

  // Add a click event listener to each restaurant list item
  item.addEventListener('click', function() {

    // Get the ID of the restaurant card to show
    const rcardId = item.getAttribute('data-rcard-id');

    // Get the restaurant card to show
    const restaurantCard = document.getElementById(`rcard-${rcardId}`);

    // Show the restaurant card
    restaurantCardContainer.style.display = 'block';
    restaurantCard.style.display = 'block';

    // Add a click event listener to the close button
    const closeButton = restaurantCard.querySelector('.close-rcard-button');
    closeButton.addEventListener('click', function() {
      // Hide the restaurant card
      restaurantCardContainer.style.display = 'none';
      restaurantCard.style.display = 'none';
    });

  });

});

});





