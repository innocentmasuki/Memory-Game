let cardsContainer = document.getElementById("game-container");
let gameCard = document.getElementsByClassName("game-card");
const clickSound = document.getElementById("click");
const badClickSound = document.getElementById("click_bad");
const winGame = document.getElementById("win_game");
const starSound = document.getElementById("star_game");
const backgroundSound = document.getElementById("background_music");
// let newGame_btn = document.getElementById('new-game-btn');
let icons = document.getElementsByClassName("g");
let selectedId, history = [],
    count = 0,
    win = 0,
    starCount = 0;
const stars = [],
    threeStars = [];
let movesCounter = document.getElementById("moves");
let starsContainer = document.getElementById("starsContainer");


function load() {
    backgroundSound.loop = true;
    backgroundSound.play();
    starSound.volume = 10;
}

function addItems(container, cards) {
    cards.forEach(function(child) {
        container.appendChild(child);
    });
}


function removeItems(container, inner) {
    inner.forEach(function(child) {
        container.removeChild(child);
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

function generateStars(starClass) {
    let stars = document.createElement('i');
    stars.innerHTML = "<i class=\"" + starClass + "\"></i>";
    return stars;
}



const iconType = {
    instagram: "fa fa-instagram g",
    whatsApp: "fa fa-whatsapp g",
    snapchat: "fa fa-snapchat-ghost g",
    facebook: "fa fa-facebook-official g",
    twitter: "fa fa-twitter g",
    weChat: "fa fa-wechat g",
    googlePlus: "fa fa-google-plus g",
    telegram: "fa fa-telegram g",
    starFull: "fa fa-star",
    starEmpty: "fa fa-star-o"
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
for (let i = 0; i < 3; i++) {
    stars.push(generateStars(iconType.starEmpty));
}

for (let i = 0; i < 3; i++) {
    threeStars.push(generateStars(iconType.starFull));
}

const twoStars = [
    generateStars(iconType.starFull),
    generateStars(iconType.starFull),
    generateStars(iconType.starEmpty)
];

const oneStar = [
    generateStars(iconType.starFull),
    generateStars(iconType.starEmpty),
    generateStars(iconType.starEmpty)
];

function singleStar() {

    starSound.play();
    removeItems(starsContainer, stars);
    addItems(starsContainer, oneStar);
}


function doubleStars() {
    starSound.play();
    removeItems(starsContainer, oneStar);
    addItems(starsContainer, twoStars);
}


function trippeStars() {
    starSound.play();
    removeItems(starsContainer, twoStars);
    addItems(starsContainer, threeStars);

}


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
    addItems(cardsContainer, new_game_cards);
    switch (starCount) {
        case 1:
            removeItems(starsContainer, oneStar);
            addItems(starsContainer, stars);
            break;
        case 2:
            removeItems(starsContainer, twoStars);
            addItems(starsContainer, stars);
            break;
        case 3:
            removeItems(starsContainer, threeStars);
            addItems(starsContainer, stars);
            break;
        default:
            addItems(starsContainer, stars);
            break;
    }

}


function start() {
    for (let i = 0; i < icons.length; i++) {
        icons[i].style.display = "none";
    }
    movesCounter.textContent = "Start";

}

function viewIcons() {
    for (let i = 0; i < icons.length; i++) {
        icons[i].style.display = "block";
    }
}


function newGame() {

    for (let j = 0; j < gameCard.length; j++) {
        gameCard[j].removeAttribute("disabled");
    }
    history.length = 0;
    count = 0;
    win = 0;
    movesCounter.textContent = "Memorize";

    startGame();
    viewIcons();
    window.setTimeout(start, 7000);


}


function idPusher(id) {
    history.push(id);
}

function conditions() {
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
    let choice1 = document.getElementById(history[0]);
    let choice2 = document.getElementById(history[1]);
    let icon1 = choice1.children[0];
    let icon2 = choice2.children[0];
    if ((history.length === 2) && (conditions() === "yes")) {
        choice1.disabled = "true";
        choice2.disabled = "true";
        win++;
    } else if ((history.length === 2) && (conditions() === "no")) {
        choice1.removeAttribute('disabled');
        choice2.removeAttribute('disabled');
        icon1.style.display = "none";
        icon2.style.display = "none";
        clickSound.pause();
        badClickSound.play();
    }

    if (history.length === 2) {
        history.length = 0;
    }


}

function show(id) {
    clickSound.play();
    let selectedCard = document.getElementById(id);
    let ico = selectedCard.children[0];
    ico.style.display = "block";
    selectedId = id;
    selectedCard.disabled = "true";
    idPusher(selectedId);
    count++;
    movesCounter.textContent = count;

    match();
    if (win === 8) {

        winGame.loop = false;
        winGame.play();
        if (count < 18) {
            window.setTimeout(singleStar, 2000);
            window.setTimeout(doubleStars, 3000);
            window.setTimeout(trippeStars, 4000);
            starCount = 3;
        } else if (count > 18 && count < 25) {
            window.setTimeout(singleStar, 2000);
            window.setTimeout(doubleStars, 3000);
            starCount = 2;
        } else {
            window.setTimeout(singleStar, 2000);
            starCount = 1;
        }

        movesCounter.textContent = "You Won!!";

    }

}