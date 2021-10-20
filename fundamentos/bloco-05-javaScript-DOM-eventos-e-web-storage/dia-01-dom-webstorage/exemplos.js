const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

let titulo = document.getElementById("page-title").innerText = "José"
let secondParagraph = document.getElementById("second-paragraph").innerText = 'Joao'

let paragraphs = document.getElementsByClassName("paragraphs")
for (let i = 0; i < paragraphs.length; i++); {
    paragraphs[i].innerText = "Airton Sena";
}