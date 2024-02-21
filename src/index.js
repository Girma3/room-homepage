import "./style.css";
import { product, appendElement } from "./room";
const navHolder = document.querySelector(".nav-holder");
const closeNavbtn = document.querySelector(".close-nav-btn");
const openNavbtn = document.querySelector(".open-nav-btn");
const firstNav = document.querySelector(".first-nav");
const secondNav = document.querySelector(".second-nav");
const links = document.querySelector(".links");
closeNavbtn.addEventListener("click", () => {
  if (secondNav.getAttribute("data-spread") === "true") {
    firstNav.setAttribute("data-spread", true);
    secondNav.setAttribute("data-spread", "false");
    navHolder.style.backgroundColor = "transparent";
  }
});
openNavbtn.addEventListener("click", () => {
  if (secondNav.getAttribute("data-spread") === "false") {
    firstNav.setAttribute("data-spread", false);
    secondNav.setAttribute("data-spread", true);
    navHolder.style.backgroundColor = "white";
  }
});
const btns = document.querySelector("[data-slider-btns");
const divHolder = document.querySelector("[data-hero-holder");
const article = document.querySelector("[data-article]");
let sliderIndex = 0;
function defaultSlider() {
  appendElement(divHolder, article, sliderIndex);
  sliderIndex++;
}
btns.addEventListener("click", (e) => {
  if (e.target.matches("[data-next-btn")) {
    

  
  

  
    // if (sliderIndex === product.indexOf(slide)) {
    //   appendElement(divHolder, article, sliderIndex);
    //   sliderIndex++;
    // } else if (sliderIndex === product.indexOf(slide)) {
    //   appendElement(divHolder, article, sliderIndex);
    //   sliderIndex++;
    // } else if (sliderIndex === product.indexOf(slide)) {
    //   appendElement(divHolder, article, sliderIndex);
    //   sliderIndex = 0;
    // }
  }

  if (e.target.matches("[data-prev-btn]")) {
    if (sliderIndex == 0) {
      appendElement(divHolder, article, sliderIndex);
      console.log(sliderIndex, "0");
      sliderIndex = product.length - 1; //2
    } else if (sliderIndex == 1) {
      appendElement(divHolder, article, sliderIndex);
      console.log(sliderIndex, "1");
      sliderIndex--; //0
    } else if (sliderIndex == 2) {
      appendElement(divHolder, article, sliderIndex);
      console.log(sliderIndex, "2");
      sliderIndex--; //1
      console.log(sliderIndex, "2");
    }
  }
});
defaultSlider();
