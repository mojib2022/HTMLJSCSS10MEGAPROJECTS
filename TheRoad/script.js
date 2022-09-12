// Getting the dom container
const container = document.querySelector(".container");

//Open Navbr
document.querySelector(".open-navbar-icon").addEventListener("click", () => {
  container.classList.add("change");
});

//Close Navbar
document.querySelector(".close-navbar-icon").addEventListener("click", () => {
  container.classList.remove("change");
});

//Defining Colors
const colors = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"];

let i = 0;

//Applying colors on nav link
Array.from(document.querySelectorAll(".nav-link")).forEach(item => {
  item.style.cssText = `background-color: ${colors[i++]}`;
});

//Toggling class
Array.from(document.querySelectorAll(".navigation-button")).forEach(item => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change");
  };
});
