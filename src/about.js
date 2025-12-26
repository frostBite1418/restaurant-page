import { Container, clearContent } from "./home.js"

export function makeContact() {
    clearContent()

    const contactHeader = "Contacts"
    const contactContentOne = "General Inquiries"
    const contactContentOneContent = "📧 hello@cluckdynasty.com, 📞 (615) 555-2582"
    const contactContentTwo = "Catering"
    const contactContentTwoContent = "📧 catering@cluckdynasty.com, 📞 (615) 555-3743"
    const contactContentThree = "Careers and Applications " 
    const contactContentThreeContent = "📧 joinus@cluckdynasty.com, 📞 (615) 555-9274"
    const contactContainer = new Container(contactHeader, contactContentOne)
    contactContainer.makeDivContainer("contacts")
    contactContainer.makeHeader("h1", ".contacts")
    contactContainer.makeContent("h2", ".contacts")
    contactContainer.changeContent(contactContentOneContent)
    contactContainer.makeContent("p", ".contacts")
    contactContainer.changeContent(contactContentTwo)
    contactContainer.makeContent("h2", ".contacts")
    contactContainer.changeContent(contactContentTwoContent)
    contactContainer.makeContent("p", ".contacts")
    contactContainer.changeContent(contactContentThree)
    contactContainer.makeContent("h2", ".contacts")
    contactContainer.changeContent(contactContentThreeContent)
    contactContainer.makeContent("p", ".contacts")

    const footerContent = "@Primo"
    const footerContainer = new Container("None", footerContent)
    footerContainer.makeFooter("p", "footer")
}