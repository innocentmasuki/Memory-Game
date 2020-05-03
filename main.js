let cardsContainer = document.getElementById("game-container");
// let newGame_btn = document.getElementById('new-game-btn');
let icons = document.getElementsByClassName("fa");
let selectedId, history = [];


function addCards(container, cards) {
    cards.forEach(function (child) {
        container.appendChild(child);
    });
}

function generateCards(idValue, iconClass) {
    let card = document.createElement('button');
    card.setAttribute('class', 'game-card');
    card.setAttribute('id', idValue);
    card.setAttribute('onmouseup', 'show(this.id)');
    card.innerHTML = "<i class=\"" + iconClass + "\"></i>";
    return card;
}

 const iconType = {
    instagram: "fa fa-instagram",
    whatsApp: "fa fa-whatsapp",
    snapchat: "fa fa-snapchat-ghost",
    facebook: "fa fa-facebook-official",
    twitter: "fa fa-twitter",
    weChat: "fa fa-wechat",
    googlePlus: "fa fa-google-plus",
    telegram: "fa fa-telegram"
};

const cardsView = [
    generateCards(1, iconType.instagram),
    generateCards(2, iconType.whatsApp),
    generateCards(3, iconType.snapchat),
    generateCards(4, iconType.facebook),
    generateCards(5, iconType.twitter),
    generateCards(6, iconType.weChat),
    generateCards(7, iconType.googlePlus),
    generateCards(8, iconType.telegram),
    generateCards(9, iconType.instagram),
    generateCards(10, iconType.whatsApp),
    generateCards(11, iconType.snapchat),
    generateCards(12, iconType.facebook),
    generateCards(13, iconType.twitter),
    generateCards(14, iconType.weChat),
    generateCards(15, iconType.googlePlus),
    generateCards(16, iconType.telegram)
];


function randomArrayShuffle(card) {
    let currentIndex = card.length,
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
    let new_game_cards = randomArrayShuffle(cardsView);
    addCards(cardsContainer, new_game_cards);

}


function hideIcons(){
    for(let i = 0; i < icons.length; i++){
        icons[i].style.display = "none";
    }
}

function viewIcons(){
    for(let i = 0; i < icons.length; i++){
        icons[i].style.display = "block";
    }
}


function newGame() {
    startGame();
    viewIcons();
    window.setTimeout(hideIcons, 5000);

}


function idPusher(id) {
    history.push(id);
    console.log(history);
}

function conditions(){
    if ((history[0] === "1") && (history[1] === "9") || (history[0] === "9") && (history[1] === "1")) {
        return "yes";
    } else if ((history[0] === "2") && (history[1] === "10") || (history[0] === "10") && (history[1] === "2")) {
        return "yes";
    } else if ((history[0] === "3") && (history[1] === "11") || (history[0] === "11") && (history[1] === "3")) {
        return "yes";
    } else if ((history[0] === "4") && (history[1] === "12") || (history[0] === "12") && (history[1] === "4")) {
        return "yes";
    } else if ((history[0] === "5") && (history[1] === "13") || (history[0] === "13") && (history[1] === "5")) {
        return "yes";
    } else if ((history[0] === "6") && (history[1] === "14") || (history[0] === "14") && (history[1] === "6")) {
        return "yes";
    } else if ((history[0] === "7") && (history[1] === "15") || (history[0] === "15") && (history[1] === "7")) {
        return "yes";

    } else if ((history[0] === "8") && (history[1] === "16") || (history[0] === "16") && (history[1] === "8")) {
        return "yes";
    } else {
        return "no";

    }
}

function match() {

    if((history.length === 2) && (conditions() === "yes")){
        console.log("good");
    }else if ((history.length === 2) && (conditions() === "no")) {

    }

    if (history.length === 3){
        history,length = 0;
    }


}



function show(id) {
    let selectedCard = document.getElementById(id);
    let ico = selectedCard.children[0];
    ico.style.display = "block";
    selectedId = id;
    selectedCard.disabled = "true";
    idPusher(selectedId);
    match();

}

// cardsContainer.addEventListener('click', function () {
//     let selectedCard = document.getElementById(this.id);
//     let ico = selectedCard.children[0];
//     ico.style.display = "block";
//     selectedId = this.id;
//     count++;
//     selectedCard.disabled = "true";
//     match();
// });

