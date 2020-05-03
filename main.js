var cardsContainer = document.getElementById("game-container");
var newGame_btn = document.getElementById('new-game-btn');
var icons = document.getElementsByClassName("fa");
var selectedId, count = 0;

function addCards(container, cards) {
    cards.forEach(function (child) {
        container.appendChild(child);
    });
}

function generateCards(idValue, iconClass) {
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
    var currentIndex = card.length,
        temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = card[currentIndex];
        card[currentIndex] = card[randomIndex];
        card[randomIndex] = temporaryValue;
    }
    return card;
}









function startGame() {
    var new_game_cards = randomArrayShuffle(cardsView);
    addCards(cardsContainer, new_game_cards);

}



function newGame() {
    startGame();
}




function show(id) {
    var selectedCard = document.getElementById(id);
    ico = selectedCard.children[0];
    ico.classList.add("open");
    selectedId = id;
    count++;
    selectedCard.disabled = "true";

}

function match() {
    var choice1, choice2;
    if (count == 1) {
        choice1 = selectedId;
        console.log(choice1);
        console.log(count);
    } else if (count == 2) {
        choice2 = selectedId;
        console.log(choice2);
        console.log(count);
    }

    if ((choice1 === "1") && (choice2 === "9")) {
        console.log("Matched");
    } else if ((choice1 === "2") && (choice2 === "10")) {
        console.log("Matched");
    } else if ((choice1 === "3") && (choice2 === "11")) {
        console.log("Matched");
    } else if ((choice1 === "4") && (choice2 === "12")) {
        console.log("Matched");
    } else if ((choice1 === "5") && (choice2 === "13")) {
        console.log("Matched");
    } else if ((choice1 === "6") && (choice2 === "14")) {
        console.log("Matched");
    } else if ((choice1 === "7") && (choice2 === "15")) {
        console.log("Matched");
    } else if ((choice1 === "8") && (choice2 === "16")) {
        console.log("Matched");
    } else {
        console.log("Stupid");
    }


}
