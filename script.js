// Changing Jumbotron Image
function changeImage(element) {
  element.setAttribute("src", "assets/picture4.png");
  // element.setAttribute("height", "300")
  element.setAttribute("class", "jumbotron-img2");
}
function changeImageBack(element) {
  element.setAttribute("src", "assets/picture2.png");
  // element.setAttribute("height", "300")
}

// Form
var btnSubmit = document.querySelector(".submit");
console.log(btnSubmit);
var modal = document.querySelector(".modal-container");

if (btnSubmit) {
  btnSubmit.addEventListener("click", function () {
    modal.classList.add("show");

    const next = document.querySelector(".next");
    next.setAttribute(
      "value",
      "https://cobee-the-junior-programmer.netlify.app/contact.html"
    );
  });
}

AOS.init();

// Splash
var splash = document.querySelector(".splash");
if (splash) {
  document.addEventListener("DOMContentLoaded", function (event) {
    setTimeout(function () {
      splash.style.display = "none";
    }, 3000);
  });
}

var animate = document.querySelector(".astronaut-takeoff");
if (animate) {
  document.addEventListener("DOMContentLoaded", function (event) {
    setTimeout(function () {
      animate.classList.add("animation");
    }, 400);
  });
}

var splashText = document.querySelector(".splash-text");
if (splashText) {
  setTimeout(function () {
    splashText.innerHTML = "Come in!";
  }, 2000);
}
