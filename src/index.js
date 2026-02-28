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
const logo = document.querySelector(".logo");

const currentPage = document.querySelector("#content");
const heroText = homePage()[0];
const heroImageContainer = homePage()[1];
currentPage.append(heroText, heroImageContainer);
homeBtn.classList.add("active"); // Set Home as the default active page

logo.addEventListener("click", () => {
    if (homeBtn.classList.contains("active")) return; // Prevent reloading the same page
    // Remove active class from all nav buttons
    [homeBtn, contactBtn, menuBtn].forEach(btn => btn.classList.remove("active"));
    // Add active class to the home button
    homeBtn.classList.add("active");
    currentPage.innerHTML = ""; // Clear previous content
    currentPage.append(...homePage());
});

const navLogic = (navBtn, correspondingPage) => {
    navBtn.addEventListener("click", () => {
        if (navBtn.classList.contains("active")) return; // Prevent reloading the same page
        // Remove active class from all nav buttons
        [homeBtn, contactBtn, menuBtn].forEach(btn => btn.classList.remove("active"));
        // Add active class to the clicked button
        navBtn.classList.add("active");
        currentPage.innerHTML = ""; // Clear previous content
        currentPage.append(...correspondingPage());
    });
};


navLogic(homeBtn, homePage);
navLogic(contactBtn, contactPage);
navLogic(menuBtn, menuPage);


// HERO FOOTER VECTOR WEBPACK IMG IMPORT
const body = document.querySelector("body");
const heroFooterVector = document.createElement('div');
heroFooterVector.classList.add("hero-footer-vector");
const heroFooterImg = document.createElement("img");
heroFooterImg.classList.add("hero-footer-img");
heroFooterImg.src = heroFooterImageSrc;
heroFooterVector.appendChild(heroFooterImg);
body.appendChild(heroFooterVector);
const heroFooterText = document.createElement("p");
heroFooterText.classList.add("hero-footer-text");
heroFooterText.innerText = "Copyright © 2026 Jessa May Balita. All rights reserved.";
heroFooterVector.append(heroFooterText);