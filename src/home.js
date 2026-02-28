import heroImageSrc from "./assets/images/hero-image.png";


export const homePage = () => {
    // HERO SLOGAN
const heroText = document.createElement('div');
heroText.classList.add("hero-text");
const headline = document.createElement("div");
headline.classList.add("slogan");
const headlineMainText = document.createElement("h1");
headlineMainText.textContent = "Experience Sandwich BLiss";
headline.append(headlineMainText);
const headlineSubText = document.createElement("p");
headlineSubText.textContent = "Where every bite feels like a relaxing escape.";
heroText.append(headline);
headline.append(headlineSubText);
const orderBtn = document.createElement('button');
orderBtn.classList.add('orderButton');
orderBtn.innerText = "Order Now!";
heroText.append(orderBtn);

// HERO IMAGE WEBPACK IMPORT
const heroImageContainer = document.createElement('div');
heroImageContainer.classList.add("hero-img");
const heroImg = document.createElement("img");
heroImg.src = heroImageSrc;
heroImageContainer.appendChild(heroImg);

return [heroText, heroImageContainer];
}

export default homePage;


