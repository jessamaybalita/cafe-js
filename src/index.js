import "./style.css";
import {home} from "./home.js";
alert("serving...");

const homepageContent = document.querySelector("#content");
homepageContent.textContent = home;