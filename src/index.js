import "./style.css";
import { heroText, heroImage, heroFooterVector, heroImageContainer } from "./home.js"; 
alert("serving...");

const homepageContent = document.querySelector("#content");
homepageContent.append(heroText, heroImageContainer);

const body = document.querySelector("body");
body.appendChild(heroFooterVector);