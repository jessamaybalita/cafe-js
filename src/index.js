import "./style.css";
import { homeText } from "./home.js";
alert("serving...");

const homepageContent = document.querySelector("#content");
homepageContent.textContent = homeText;