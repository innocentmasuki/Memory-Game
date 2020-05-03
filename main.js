var cardsContainer = document.getElementById("game-container");
var newGame_btn = document.getElementById('new-game-btn');
var icons = document.getElementsByClassName("fa");


function addCards(container, cards){
    cards.forEach(function (child){
        container.appendChild(child);
    });
}

function generateCards(idValue, iconClass){
    card = document.createElement('button');
    card.setAttribute('class', 'game-card');
    card.setAttribute('id', idValue);
    card.setAttribute('onmouseup', 'show(this.id)');
    card.innerHTML = "<i class=\"" + iconClass + "\"></i>";
    return card;
}





var icontype = {
    instagram: "fa fa-instagram",
    whatsapp: "fa fa-whatsapp",
    snapchat: "fa fa-snapchat-ghost",
    facebook: "fa fa-facebook-official",
    twitter: "fa fa-twitter",
    wechat: "fa fa-wechat",
    googlePlus: "fa fa-google-plus",
    telegram: "fa fa-telegram"
};

var cardsView = [
    generateCards(1, icontype.instagram),
    generateCards(2, icontype.whatsapp),
    generateCards(3, icontype.snapchat),
    generateCards(4, icontype.facebook),
    generateCards(5, icontype.twitter),
    generateCards(6, icontype.wechat),
    generateCards(7, icontype.googlePlus),
    generateCards(8, icontype.telegram),
    generateCards(9, icontype.instagram),
    generateCards(10, icontype.whatsapp),
    generateCards(11, icontype.snapchat),
    generateCards(12, icontype.facebook),
    generateCards(13, icontype.twitter),
    generateCards(14, icontype.wechat),
    generateCards(15, icontype.googlePlus),
    generateCards(16, icontype.telegram)
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









function startGame(){
    var new_game_cards = randomArrayShuffle(cardsView);
    addCards(cardsContainer, new_game_cards);

}



function newGame(){
    startGame();
}



function show(id){
    var selectedCard = document.getElementById(id);
    ico = selectedCard.children[0];
    if(ico.style.display === "block"){
            ico.style.display = "none";
    }
    else{
            ico.style.display = "block";
    }
        selectedCard.disabled = "true";

    return id;
}









