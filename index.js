function getRandomNumber(){
    let re=Math.floor(Math.random()*13+1)
    if(re>10) return 10
    else if(re===1) return 11
    else return re}
let player={name:"Navya",chips:160}
let isAlive=false
let hasBlackJack=false
let cards=[]
let sum=0
let messageP=document.getElementById("message")
let cardsEl=document.getElementById("cards-el")
let sumEl=document.getElementById("sum-el")
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+": $"+player.chips
function startGame(){
let firstCard=getRandomNumber()
let secondCard=getRandomNumber()
sum=firstCard+secondCard
cards=[firstCard,secondCard]
isAlive=true
cardsEl.textContent="Cards: "
for(let i =0; i<cards.length;i++){
cardsEl.textContent += cards[i]+" "
}
sumEl.textContent ="Sum: "+sum
renderGame()
}


function renderGame(){
cardsEl.textContent="Cards: "
for(let i =0; i<cards.length;i++){
cardsEl.textContent += cards[i]+" "
}
sumEl.textContent ="Sum: "+sum
if(sum<21)
{messageP.textContent="Want to draw a new Card" 
    hasBlackJack=false
}
else if(sum==21)
{messageP.textContent="Wohoo You have won"
hasBlackJack=true} 
else 
{messageP.textContent="Better Luck next time"
isAlive=false
}
}
function newCard()
{if(isAlive===true&&hasBlackJack==false){
let nCard=getRandomNumber()
sum+=nCard
cards.push(nCard)
if(isAlive===true) renderGame()
}
}

