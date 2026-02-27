// HERO SLOGAN
export const heroText = document.createElement('div');
heroText.classList.add("hero-text");
const slogan = document.createElement("div");
slogan.classList.add("slogan");
const sloganMainText = document.createElement("h1");
sloganMainText.textContent = "Experience Sandwich BLiss";
slogan.append(sloganMainText);
const sloganSubText = document.createElement("p");
sloganSubText.textContent = "Where every bite feels like a relaxing escape.";
slogan.append(sloganSubText);
heroText.append(slogan);
const orderBtn = document.createElement('button');
orderBtn.classList.add('orderButton');
orderBtn.innerText = "Order Now!";
heroText.append(orderBtn);

// HERO IMAGE WEBPACK IMPORT
import heroImageSrc from "./assets/images/hero-image.png";
export const heroImageContainer = document.createElement('div');
heroImageContainer.classList.add("hero-img");
const heroImg = document.createElement("img");
heroImg.src = heroImageSrc;
heroImageContainer.appendChild(heroImg);

// HERO FOOTER VECTOR WEBPACK IMPORT
import heroFooterImageSrc from "./assets/vactors/wave_vector.svg";
export const heroFooterVector = document.createElement('div');
heroFooterVector.classList.add("hero-footer-vector");
const heroFooterImg = document.createElement("img");
heroFooterImg.classList.add("hero-footer-img");
heroFooterImg.src = heroFooterImageSrc;
heroFooterVector.appendChild(heroFooterImg);

