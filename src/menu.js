import { Container, clearContent } from "./home.js"
import fries from "./fries.jpg"
import sandwich from "./sandwich.jpg"
import friedChickenImage from "./fried_chicken.jpg"

export function makeMenu(){
    clearContent()

    const menuTitleContent = "Our Products"
    const menuTitle = new Container(menuTitleContent, "none")
    menuTitle.makeDivContainer("menu")
    menuTitle.makeHeader("h1", ".menu")

    const productOneContentOne = "Cluck Supreme Sandwich"
    const productOneContentTwo = "Buttermilk fried chicken, slaw, pickles, and spicy mayo on a brioche bun."
    const productOneContainer = new Container("none", productOneContentOne)
    productOneContainer.makeDivContainer("menu")
    productOneContainer.makeImage(sandwich, ".menu")
    productOneContainer.makeContent("h4", ".menu")
    productOneContainer.changeContent(productOneContentTwo)
    productOneContainer.makeContent("p", ".menu")


    const productTwoContentOne = "Crispy Chef Chicken"
    const productTwoContentTwo = "Juicy, crispy fried chicken seasoned with our secret 9-spice blend."
    const productTwoContainer = new Container("none", productTwoContentOne)
    productTwoContainer.makeDivContainer("menu")
    productTwoContainer.makeImage(friedChickenImage, ".menu")
    productTwoContainer.makeContent("h4", ".menu")
    productTwoContainer.changeContent(productTwoContentTwo)
    productTwoContainer.makeContent("p", ".menu")

    const productThreeContentOne = "Golden Fries with Garlic Dust"
    const productThreeContentTwo = "Crispy, golden-cut fries tossed in a light blend of roasted garlic, sea salt, and a hint of herbs — perfectly crunchy on the outside, fluffy inside, and made to pair with every chicken bite."
    const productThreeContainer = new Container("none", productThreeContentOne)
    productThreeContainer.makeDivContainer("menu")
    productThreeContainer.makeImage(fries, ".menu")
    productThreeContainer.makeContent("h4", ".menu")
    productThreeContainer.changeContent(productThreeContentTwo)
    productThreeContainer.makeContent("p", ".menu")

    const footerContentOne = "Photo by Léo Roza Unsplash (Crispy Chef Chicken)"
    const footerContentTwo = "Photo by Eaters Collectives Unsplash (Cluck Supreme Sandwich)"
    const footerContentThree = "Photo by Louis Hansel Unsplash (Golden Fries with Garlic Dust)"
    const footerContainer = new Container("None", footerContentOne)
    footerContainer.makeFooter("p", "footer")
    footerContainer.changeContent(footerContentTwo)
    footerContainer.makeFooterContent("p", ".footer")
    footerContainer.changeContent(footerContentThree)
    footerContainer.makeFooterContent("p", ".footer")
}