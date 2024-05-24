const questionContant = document.querySelectorAll(".question__content");
const question = document.querySelectorAll(".question__h1");



function openQuestion(n) {
   questionContant[n - 1].classList.toggle("active");
}
