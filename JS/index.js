// for scroll effect

window.addEventListener("scroll", scroll);

function scroll() {
  let nav = document.querySelector("nav");
  if (scrollY > 0) nav.classList.add("nav-scrolled");
  else nav.classList.remove("nav-scrolled");
}

// for dark theme moon icon to sun icon

var moon = document.getElementById("moon-icon");
let electric_vehicle = document.querySelector(".second-section-title");
let last_section_bg = document.querySelector(".last-section-bg");

moon.onclick = function () {
  var check = document.body.classList.toggle("dark-theme");
  var nav = document.querySelector("nav");

  var check = document.body.classList.contains("dark-theme");

  if (check == true) {
    moon.src = "Elements/sun.png";

    last_section_bg.classList.add("last-bg-change");
  } else {
    moon.src = "Elements/moon.png";

    last_section_bg.classList.remove("last-bg-change");
  }
};

// for remove green part in dark theme

window.addEventListener("scroll", onDarkScroll);
function onDarkScroll() {
  let nav = document.querySelector("nav");
  var check = document.body.classList.contains("dark-theme");
  if (check == true) {
    nav.classList.remove("nav-scrolled");
  }
}

// for laoder
window.addEventListener("load", addloadpage);
function addloadpage() {
  let preload = document.querySelector(".preload");
  preload.classList.add("preload-finish");
}

// text-typing animation

const texts = ["ELECTRIC VEHICLES", "TOMORROW"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".text-type").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 300);
})();
