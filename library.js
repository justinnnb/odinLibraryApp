
let myLibrary = [];


let removebuttons = document.getElementsByClassName("removeButton")
let readButton = document.getElementsByClassName("readButton")


class Book {
    constructor(name, pages, read) {
    this.name = name
    this.pages = pages
    this.read = read
    this.info = function() {
        return this.name + " " + this.pages;
        }
    }
}

const theHobbit = new Book("The Hobbit by J.R.R. Tolkien", "295 pages" , "Unread")
const HarryPotter = new Book("Harry Potter and the Goblet of Fire", "500 pages" , "Unread")


myLibrary.push(theHobbit);
myLibrary.push(HarryPotter);

function displayBook (item) {
    let div = document.createElement("div")
    let listName = document.createElement("li")
    let listPages = document.createElement("li")
    let listRead = document.createElement("li")
    let removeButton = document.createElement("button")
    let readButton = document.createElement("button")
    let containerBooks = document.querySelectorAll(".container-books")
    
    containerBooks[0].appendChild(div)
    div.className = "bookCard"
    div.id = myLibrary.indexOf(item)
    listName.textContent = item.name
    listPages.textContent = item.pages
    listRead.textContent = item.read
    div.appendChild(listName)
    div.appendChild(listPages)
    div.appendChild(listRead)

    div.appendChild(readButton)
    readButton.className = "readButton"
    readButton.textContent = "Mark as Read"

    div.appendChild(removeButton)
    removeButton.className = "removeButton"
    removeButton.textContent = "Remove Book"
}

myLibrary.forEach(Book => {
    displayBook(Book)
})

function addBookToLibrary(item) {
        let bookName = bookname.value
        let pageNumber = pagenumber.value
        let readStatus = document.querySelector('input[name="readstatus"]:checked').value
        const newBook = new Book(bookName, pageNumber, readStatus)
        myLibrary.push(newBook)
        displayBook(newBook)
        event.preventDefault()
}

document.querySelector("#addBooks").addEventListener("click", function() {
    addBookToLibrary()
})

document.body.addEventListener("click", function (event){
        if ( event.target.className == "removeButton") {
        let x = myLibrary.indexOf(Book.name)
        myLibrary.splice(x, 1)
        event.target.parentNode.remove()
        }
})

document.body.addEventListener("click", function (event){
        if ( event.target.className == "readButton") {
        let x = myLibrary.indexOf(Book.name)
        event.target.parentNode.style.border = "2px solid #FCD34D";
        
        let closestReadButton = event.target.closest(".readButton");

        closestReadButton.textContent = "Book Read"
        closestReadButton.style.border = "none";
        closestReadButton.style.margin = "6px 2px";
        closestReadButton.style.marginBottom = "2px";
        }
})



