var status = 0;
var gameCard = document.getElementsByClassName("game-card");
var cardsContainer = document.getElementById("game-container");
var newGame_btn = document.getElementById('new-game-btn');

function addCards(container, cards){
    cards.forEach(function (child){
        container.appendChild(child);
    });
}

function generateCards(idValue, iconClass){
    card = document.createElement('div');
    card.setAttribute('class', 'game-card');
    card.setAttribute('id', idValue);
    card.setAttribute('onmouseup', 'show(this.id)');
    card.innerHTML = "<i class=\"" + iconClass + "\"></i>";
    return card;
}

function generateIcon(iconClass){
    cardIcon = document.createElement('i');
    cardIcon.setAttribute('class', iconClass);
    cardIcon.setAttribute('id', "icons");
    return cardIcon;
}





var cardsView = [
    generateCards(1, "fa fa-instagram"),
    generateCards(2, "fa fa-whatsapp"),
    generateCards(3, "fa fa-snapchat-ghost"),
    generateCards(4, "fa fa-facebook-official"),
    generateCards(5, "fa fa-twitter"),
    generateCards(6, "fa fa-wechat"),
    generateCards(7, "fa fa-google-plus"),
    generateCards(8, "fa fa-telegram"),
    generateCards(9, "fa fa-instagram"),
    generateCards(10, "fa fa-whatsapp"),
    generateCards(11, "fa fa-snapchat-ghost"),
    generateCards(12, "fa fa-facebook-official"),
    generateCards(13, "fa fa-twitter"),
    generateCards(14, "fa fa-wechat"),
    generateCards(15, "fa fa-google-plus"),
    generateCards(16, "fa fa-telegram")
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








