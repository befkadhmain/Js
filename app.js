// let Click = document.getElementById("increment-btn-onclick")
// let increment = document.getElementById("increment-btn")
// let countEl = document.getElementById("count-el")
// let saveEl = document.getElementById("save-el")
// let count = 0
// let saveElement = 0

// increment.addEventListener('click', () => {
//     increment.classList.add("increment-btn-onclick")

//     setTimeout(() => {
//         increment.classList.remove("increment-btn-onclick")
//     }, 300);
// })

// let countEl = document.getElementById("count-el")
// let saveEl = document.getElementById("save-el")
// let errorMsg = document.querySelector(".error")

// let count = 0
// function increment() {
//     count += 1
//     countEl.textContent = count
//     countEl.setAttribute("style", "color: darkred")
// }

// function save() {
//     let saveElement = " " + count + " - "
//     saveEl.textContent += saveElement
//     saveEl.setAttribute("style", "color: darkred")
//     count = 0
//     countEl.textContent = 0
// }

// function error() {
//     errorMsg.textContent = "There has been an error performing your request."
// }

let num1 = 6
let num2 = 2

document.querySelector(".num1").textContent = num1
document.querySelector(".num2").textContent = num2
let answer = document.querySelector(".answer")

let Ranswer = 0
function add() {
    Ranswer = num1 + num2
    answer.innerHTML = Ranswer
}

function subtract() {
    Ranswer = num1 - num2
    answer.innerHTML = Ranswer
}

function multiply() {
    Ranswer = num1 * num2
    answer.innerHTML = Ranswer
}

function divide() {
    Ranswer = num1 / num2
    answer.innerHTML = Ranswer
}

