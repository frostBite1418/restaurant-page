import friedChickenImage from "./fried_chicken.jpg"

class Container {
    constructor(header, content) {
        this.header = header
        this.content = content
    }

    changeContent(content) {
        this.content = content
    }

    makeDivContainer(containerClass) {
        const divContainer = document.createElement("div")
        divContainer.classList.add(containerClass)
        
        const mainContainer = document.getElementById("content")
        mainContainer.appendChild(divContainer)
    }

    makeHeader(type, classContainer) {
        const headerType = document.createElement(type)
        headerType.textContent = this.header    
        
        let divContainer = document.querySelectorAll(classContainer)
        if (divContainer.length > 0) {
            divContainer = divContainer[divContainer.length - 1]
        }
        divContainer.appendChild(headerType)
    }

    makeContent(type, classContainer) {
        const contentType = document.createElement(type)
        contentType.textContent = this.content
        
        let divContainer = document.querySelectorAll(classContainer)
        if (divContainer.length > 0) {
            divContainer = divContainer[divContainer.length - 1]
        }
        divContainer.appendChild(contentType)
    }

    makeFooter(type, classContainer) {
        const mainContainer = document.getElementById("content")
        const divFooterContainer = document.createElement("div")
        divFooterContainer.classList.add(classContainer)

        mainContainer.appendChild(divFooterContainer)

        const contentType = document.createElement(type)
        contentType.textContent = this.content

        divFooterContainer.appendChild(contentType)
        
    }

    makeFooterContent(type, parentContainer) {
        const divFooterContainer = document.querySelector(parentContainer)
        const contentType = document.createElement(type)
        contentType.textContent = this.content

        divFooterContainer.appendChild(contentType)

    }

    makeImage(picture, classParent) {
        const image = document.createElement("img")
        image.src = picture
        let divContainer = document.querySelectorAll(classParent)
        if (divContainer.length > 0) {
            divContainer = divContainer[divContainer.length - 1]
        }
        divContainer.appendChild(image)        
    }
}

function clearContent() {
    const mainContainer = document.getElementById("content")
    mainContainer.replaceChildren()
}

function makeHome() {
    clearContent()
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
    productContainer.makeImage(friedChickenImage, ".home")
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

    const footerContent = "Photo by Léo Roza Unsplash (Crispy Chef Chicken)"
    const footerContainer = new Container("None", footerContent)
    footerContainer.makeFooter("p", "footer")
}

export { Container, clearContent, makeHome }