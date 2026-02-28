import "./style.css";
import homePage from "./home.js"; 
import contactPage from "./contact.js";
import menuPage from "./menu.js";
import heroFooterImageSrc from "./assets/vactors/wave_vector.svg";

alert("serving...");

// NAVBAR VARIABLES
const homeBtn = document.querySelector("#homepageBtn");
const contactBtn = document.querySelector("#contactBtn");
const menuBtn = document.querySelector("#menuBtn");

const currentPage = document.querySelector("#content");
const heroText = homePage()[0];
const heroImageContainer = homePage()[1];
currentPage.append(heroText, heroImageContainer);


const navLogic = (navBtn, correspondingPage) => {
    navBtn.addEventListener("click", () => {
        currentPage.innerHTML = ""; // Clear previous content
        currentPage.append(...correspondingPage());
    });
};

navLogic(homeBtn, homePage);
navLogic(contactBtn, contactPage);
navLogic(menuBtn, menuPage);


// HERO FOOTER VECTOR WEBPACK IMPORT
const body = document.querySelector("body");
const heroFooterVector = document.createElement('div');
heroFooterVector.classList.add("hero-footer-vector");
const heroFooterImg = document.createElement("img");
heroFooterImg.classList.add("hero-footer-img");
heroFooterImg.src = heroFooterImageSrc;
heroFooterVector.appendChild(heroFooterImg);
body.appendChild(heroFooterVector);