import "./styles.css"
import { makeHome } from "./home.js"
import { makeMenu } from "./menu.js"

const homeButton = document.getElementById("home")
const menuButton = document.getElementById("menu")
const aboutButton = document.getElementById("about")

homeButton.addEventListener("click", makeHome)
menuButton.addEventListener("click", makeMenu)
// add

makeHome()