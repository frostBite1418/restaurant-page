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

    makeImage(picture) {
        const image = document.createElement("img")
        image.src = picture
        let divContainer = document.querySelectorAll(".home")
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

export { Container, clearContent }