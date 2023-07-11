// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
let cards = [] //array - ordered list of item
let sum = 0
let hasBlackJack = false
let isAlive = false
let messege = " "
let messegeEl = document.getElementById("messege-el")
let sumEl = document.querySelector("#sum-el")
let cardsEL = document.querySelector("#cards-el")
let player={
    name: "Per",
    chips:145
} 
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name+": $"+player.chips
console.log(cards)
function getRandomCard(){
    let a = Math.floor(Math.random()*13)+1
    if (a === 1){
        return 11
    } else if ( a >10){
        return 10
    }
    else{
        return a
    }
}
console.log(getRandomCard())

// console.log(cards)
function startGame(){
    isAlive = true
    let firstCard = Math.floor(Math.random()*6+1)
    let secondCard = Math.floor(Math.random()*6+1)
    cards = [firstCard,secondCard]
    // let card = cards.push(a)&cards.push(b)
    sum = firstCard+secondCard
    console.log(cards)
    renderGame()
}
// console.log(startGame())

function renderGame(){
    cardsEL.textContent = "Cards:"+" "
    for (let i = 0; i < cards.length; i++){
        cardsEL.textContent += cards[i]+ " "
    }

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
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
    console.log("Drawing a new card from the deck!")
}
    }
    


