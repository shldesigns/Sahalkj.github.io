// Simple JavaScript for the website

var menuButton = document.querySelector(".nav-toggle");
var navBar = document.querySelector(".site-nav");

if (menuButton && navBar) {
  menuButton.onclick = function () {
    navBar.classList.toggle("open");

    if (navBar.classList.contains("open")) {
      menuButton.innerHTML = "Close";
    } else {
      menuButton.innerHTML = "Menu";
    }
  };
}


// Basic fade-in animation
var revealItems = document.querySelectorAll(".reveal");

function showItems() {
  for (var i = 0; i < revealItems.length; i++) {
    var top = revealItems[i].getBoundingClientRect().top;

    if (top < window.innerHeight - 80) {
      revealItems[i].classList.add("visible");
    }
  }
}

window.addEventListener("scroll", showItems);
window.addEventListener("load", showItems);

// Simple planet filter on the planets page
var filterButtons = document.querySelectorAll("[data-filter]");
var planetCards = document.querySelectorAll(".planet-card");

for (var b = 0; b < filterButtons.length; b++) {
  filterButtons[b].onclick = function () {
    var filter = this.getAttribute("data-filter");

    for (var j = 0; j < filterButtons.length; j++) {
      filterButtons[j].classList.remove("active");
    }

    this.classList.add("active");

    for (var c = 0; c < planetCards.length; c++) {
      var type = planetCards[c].getAttribute("data-type");

      if (filter === "all" || filter === type) {
        planetCards[c].classList.remove("hidden");
      } else {
        planetCards[c].classList.add("hidden");
      }
    }
  };
}
