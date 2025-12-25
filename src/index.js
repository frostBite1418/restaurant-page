import "./styles.css"
import friedChickenImage from "./fried_chicken.jpg"
import { Container, clearContent } from "./home.js"

const homeButton = document.getElementById("home")
const menuButton = document.getElementById("menu")
const aboutButton = document.getElementById("about")

homeButton.addEventListener("click", clearContent)
homeButton.addEventListener("click", makeHome)

function makeHome() {
    const brandContainerHeader = "Cluck Chef"
    const brandContainerContent = `"Where Every Bite Rules the Roost!"`
    const brandContainer = new Container(brandContainerHeader, brandContainerContent)
    brandContainer.makeDivContainer("home")
    brandContainer.makeHeader("h1", ".home")
    brandContainer.makeContent("p", ".home")

    const productContainerHeader = "Best Selling Product"
    const productContainerContent = "Crispy Chef Chicken"
    const productContainer = new Container(productContainerHeader, productContainerContent)
    productContainer.makeDivContainer("home")
    productContainer.makeHeader("h2", ".home")
    productContainer.makeImage(friedChickenImage)
    productContainer.makeContent("p", ".home")

    const hoursContainerHeader = "Open Hours"
    const hoursContainerDayOne = "Monday 10:30 AM - 9:00 PM"
    const hoursContainerDayTwo = "Tuesday 10:30 AM - 9:00 PM"
    const hoursContainerDayThree = "Wednesday 10:30 AM - 9:00 PM"
    const hoursContainerDayFour = "Thursday 10:30 AM - 9:30 PM"
    const hoursContainerDayFive = "Friday 10:30 AM - 10:30 PM"
    const hoursContainerDaySix = "Saturday 9:00 AM - 10:30 PM"
    const hoursContainerDaySeven = "Sunday 9:00 AM - 8:00 PM"
    const hoursContainer = new Container(hoursContainerHeader, hoursContainerDayOne)
    hoursContainer.makeDivContainer("home")
    hoursContainer.makeHeader("h2", ".home")
    hoursContainer.makeContent("p", ".home")
    hoursContainer.changeContent(hoursContainerDayTwo)
    hoursContainer.makeContent("p", ".home")
    hoursContainer.changeContent(hoursContainerDayThree)
    hoursContainer.makeContent("p", ".home")
    hoursContainer.changeContent(hoursContainerDayFour)
    hoursContainer.makeContent("p", ".home")
    hoursContainer.changeContent(hoursContainerDayFive)
    hoursContainer.makeContent("p", ".home")
    hoursContainer.changeContent(hoursContainerDaySix)
    hoursContainer.makeContent("p", ".home")
    hoursContainer.changeContent(hoursContainerDaySeven)
    hoursContainer.makeContent("p", ".home")

    const locationHeader = "Location"
    const locationContentOne = "Cluck Dynasty 1288 Rooster Row Nashville, Tennessee 37201"
    const locationContentTwo = "Located just off Broadway, across from Music Row Plaza — right in the heart of Nashville’s food and music scene."
    const locationContainer = new Container(locationHeader, locationContentOne)
    locationContainer.makeDivContainer("home")
    locationContainer.makeHeader("h2", ".home")
    locationContainer.makeContent("p", ".home")
    locationContainer.changeContent(locationContentTwo)
    locationContainer.makeContent("p", ".home")
}

makeHome()