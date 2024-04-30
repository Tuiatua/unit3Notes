const cardList = document.querySelector('.cardList');
let point = 0
const tally = document.getElementById('point');

buildBoard();

let interval = setInterval(function(){
    addCard(cardList.children.length + 1)
}, 2000);

let yel = setInterval(function(){
    yCard('Super Card');
}, 4000);


function yCard(value){
    let card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('yellow');
    card.innerHTML = value;
    cardList.appendChild(card);
}
function addCard(value){
    let card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('active');
    card.innerHTML = value;
    cardList.appendChild(card);
}

function buildBoard(){
    for(let i = 0; i < 12; i++){
        addCard('starter');
    }
}

cardList.addEventListener('click', function(e){
   console.log(e.target);
   if(e.target.matches('.cardList')){
       return
   }
   if(e.target.classList.contains('yellow')){
       e.target.classList.remove('yellow');
       e.target.classList.add('active');
       point++;
       point++;
       point++;
       tally.innerHTML = `Points: ${point}`;
       return
   }
   if(e.target.classList.contains('active')){
       e.target.classList.remove('active');
       e.target.classList.add('inactive');
       point++;
       tally.innerHTML = `Points: ${point}`;
       return
   }
   e.target.remove();
   point++;
   point++;
    tally.innerHTML = `Points: ${point}`;
   let children = cardList.children;
   if(children.length < 1){
       clearInterval(interval);
       clearInterval(yel);
       let end = document.createElement('h1');
       end.innerHTML = `You ended the game with ${point} points`;
       cardList.appendChild(end);
       tally.remove();
   }
});