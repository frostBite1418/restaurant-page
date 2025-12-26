import "./styles.css"
import { makeHome } from "./home.js"
import { makeMenu } from "./menu.js"
import { makeContact } from "./about.js"

const homeButton = document.getElementById("home")
const menuButton = document.getElementById("menu")
const contactButton = document.getElementById("contacts")

homeButton.addEventListener("click", makeHome)
menuButton.addEventListener("click", makeMenu)
contactButton.addEventListener("click", makeContact)

makeHome()