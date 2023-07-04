let firstCard = 10
let secondCard = 4
let cards = [firstCard,secondCard ] //array - ordered list of item
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let messege = " "
let messegeEl = document.getElementById("messege-el")
let sumEl = document.querySelector("#sum-el")
let cardsEL = document.querySelector("#cards-el")

function startGame(){
    renderGame()
}

function renderGame(){
    cardsEL.textContent = "Cards:"+" "+cards[0]+" "+cards[1]
    sumEl.textContent = "Sum:"+" "+sum

    if (sum <= 20){
        messege = ("Do you want to draw a new card?")
    }
    else if (sum === 21){
        messege = ("Wow, you've got the black jack.")
        hasBlackJack = true
    }
    else {
        messege = ("You're out of the game.")
        isAlive = false
    }
    messegeEl.textContent = messege
}

function newCard(){
    let card = 7
    sum += card
    renderGame()
    console.log("Drawing a new card from the deck!")
}

// console.log(isAlive)
// console.log(hasBlackJack)
// let person = 22
// if (person <= 20){
//     console.log("You are not able to enter the club")
// }
// else {
//     con
// let age = 99
// if (age < 100){
//     console.log("Not eligible.")
// }
// else if (age === 100){
//     console.log("Here is your card from the King.")
// }
// else{
//     console.log("You have already got it.")
// }
