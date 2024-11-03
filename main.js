//4
let lights = Array.from(document.querySelectorAll("#trafficLights .color"));
let next = document.querySelector("#next");
next.addEventListener("click", changeColor);
let colors = ["red", "yellow", "green"];
let index = 0;
function changeColor() {
    lights.forEach(light => {
        light.style.backgroundColor = "#8a8a8a";
    });
    lights[index].style.backgroundColor = colors[index];
    if (index != 2) {
        index++;
    }
    else {
        index = 0;
    }
}

//5
let liList = Array.from(document.querySelectorAll("#books li"));
let highlightedBook;
liList.forEach(book => {
    book.addEventListener("click", function () {
        if (highlightedBook) {
            highlightedBook.style.backgroundColor = "";
        }
        book.style.backgroundColor = "#ffa782";
        highlightedBook = book;
    });
});