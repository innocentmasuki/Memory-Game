var status = 0;
var gameCard = document.getElementsByClassName("game-card");
var cardsContainer = document.getElementById("game-container");
var newGame_btn = document.getElementById('new-game-btn');

function addCards(container, cards){
    cards.forEach(function (child){
        container.appendChild(child);
    });
}

function generateCards(idValue){
    card = document.createElement('div');
    card.setAttribute('class', 'game-card');
    card.setAttribute('id', idValue);
    card.setAttribute('onmouseup', 'show(this.id)');

    return card;
}

function generateIcon(iconClass){
    cardIcon = document.createElement('i');
    cardIcon.setAttribute('class', iconClass);
    cardIcon.setAttribute('id', "icons");
    return cardIcon;
}





var cardsView = [
    generateCards(1),
    generateCards(2),
    generateCards(3),
    generateCards(4),
    generateCards(5),
    generateCards(6),
    generateCards(7),
    generateCards(8),
    generateCards(9),
    generateCards(10),
    generateCards(11),
    generateCards(12),
    generateCards(13),
    generateCards(14),
    generateCards(15),
    generateCards(16)
];





function randomArrayShuffle(card) {
  var currentIndex = card.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = card[currentIndex];
    card[currentIndex] = card[randomIndex];
    card[randomIndex] = temporaryValue;
  }
  return card;
}









function myFunction(){
    var new_game_cards = randomArrayShuffle(cardsView);
    addCards(cardsContainer, new_game_cards);

}

function newGame(){
    myFunction();
}




function show(id){
    var selectedCard = document.getElementById(id);
    var contents = selectedCard.textContent;
    console.log(contents);
//    if (contents.style.visibility === "hidden") {
//    contents.style.visibility = "visible";
//    } else {
//    contents.style.display = "hidden";
//    }
}








