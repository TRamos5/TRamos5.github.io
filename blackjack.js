//getting the ID for the element
var im1 = document.getElementById('im1');
var im2 = document.getElementById('im2');
var im3 = document.getElementById('im3');
var im4 = document.getElementById('im4');
var im5 = document.getElementById('im5');

//looking for a 'click' and then running what it finds
document.getElementById('deal-button').addEventListener('click', function(){
    reset();
});

function reset(){
    im1.setAttribute('src', 'JPEG/Gray_back.jpg');
    im2.setAttribute('src', '');
    im3.setAttribute('src', '');
    im4.setAttribute('src', '');
    im5.setAttribute('src', '');
    im6.setAttribute('src', '');
    im7.setAttribute('src', '');
    im8.setAttribute('src', '');
    im9.setAttribute('src', '');
    im10.setAttribute('src', '');
    var busts = document.querySelector('.bust');
    busts.textContent = "";
    var winners = document.querySelector('.win');
    winners.textContent = "";

    standCount = 0;
    hitCount = 0;

    dealerHand = [];
    playerHand = [];
    
    im1.setAttribute('src', 'JPEG/Gray_back.jpg');
    im2.setAttribute('src', getCardImageUrl());
    minusDecks();
    calculatePoint();
    disDPoints();
    im3.setAttribute('src', getCardImageUrl());
    minusDeck();
    calculatePoints();
    disPPoints();
    im4.setAttribute('src', getCardImageUrl());
    minusDeck();
    calculatePoints();
    disPPoints();

}

var hitCount = 0;
document.getElementById('hit-button').addEventListener('click', function(){
    if(playerHand.length != 0){
        if(hitCount == 0){
            im5.setAttribute('src', getCardImageUrl());
            minusDeck();
            calculatePoints();
            disPPoints();
            hitCount +=1;
            bust();
        }
        else if(hitCount == 1){
            im6.setAttribute('src', getCardImageUrl());
            minusDeck();
            calculatePoints();
            disPPoints();
            hitCount +=1;
            bust();
        }
        else if(hitCount == 2){
            im7.setAttribute('src', getCardImageUrl());
            minusDeck();
            calculatePoints();
            disPPoints();
            hitCount +=1;
            bust();
        }
        else if(hitCount == 3){
            im8.setAttribute('src', getCardImageUrl());
            minusDeck();
            calculatePoints();
            disPPoints();
            hitCount += 1;
            bust();
        }
    }
});

var standCount = 0;
document.getElementById('stand-button').addEventListener('click', function(){
    if (standCount == 0){
        im1.setAttribute('src', getCardImageUrl());
        minusDecks();
        calculatePoint();
        disDPoints();
        bust();
        standCount += 1;
        }
    if (dealerHand.length >= 2){
        if(dealerPoints <= 17 && standCount == 1){
            im9.setAttribute('src', getCardImageUrl());
            minusDecks();
            calculatePoint();
            disDPoints();
            standCount +=1;
            bust();
        }
        else if(dealerPoints <= 17 && standCount == 2){
            im10.setAttribute('src', getCardImageUrl());
            minusDecks();
            calculatePoint();
            disDPoints();
            standCount +=1;
            bust();
        }
    } 
    if (dealerPoints > playerPoints && dealerPoints <=21 || playerBust == true){
        var winners = document.querySelector('.win');
        winners.textContent = "Dealer Wins :(";
    }
    else if (playerPoints > dealerPoints && playerPoints <= 21 || dealerBust == true){
        var winners = document.querySelector('.win');
        winners.textContent = "You Win :)";
    }
});

//creating the deck with a for loop 
var point = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];
var suit = ['H', 'C', 'D', 'S'];
var deck = [];

function getDeck(){
    for (x = 0; x < suit.length; x++){
        for (y = 0; y < point.length; y++){
            var card = {point: point[y], suit: suit[x]};
            deck.push(card);
        }
    }
    return deck;
}

//removing the first card from the deck
var dealerHand = [];
var playerHand = [];

function minusDeck(){
    let firstResult = deck.shift();
    playerHand.push(firstResult);
};

function minusDecks(){
    let firstResult = deck.shift();
    dealerHand.push(firstResult);
};
getDeck();
shuffleArray(deck);
console.log(deck);


//shifting through card at top of the deck and assiging it an image tag
function getCardImageUrl(){
    if (deck[0]['point'] == 1){
        var url = ('JPEG/A' + deck[0]['suit'] + '.jpg');
    }
    else if (deck[0]['point'] == 2){
        var url = ('JPEG/2' + deck[0]['suit'] + '.jpg');
    }
    else if (deck[0]['point'] == 3){
        var url = ('JPEG/3' + deck[0]['suit'] + '.jpg');
    }
    else if (deck[0]['point'] == 4){
        var url = ('JPEG/4' + deck[0]['suit'] + '.jpg');
    }
    else if (deck[0]['point'] == 5){
        var url = ('JPEG/5' + deck[0]['suit'] + '.jpg');
    }
    else if (deck[0]['point'] == 6){
        var url = ('JPEG/6' + deck[0]['suit'] + '.jpg');
    }
    else if (deck[0]['point'] == 7){
        var url = ('JPEG/7' + deck[0]['suit'] + '.jpg');
    }
    else if (deck[0]['point'] == 8){
        var url = ('JPEG/8' + deck[0]['suit'] + '.jpg');
    }
    else if (deck[0]['point'] == 9){
        var url = ('JPEG/9' + deck[0]['suit'] + '.jpg');
    }
    else if (deck[0]['point'] == 10){
        var url = ('JPEG/10' + deck[0]['suit'] + '.jpg');
    }
    else if (deck[0]['point'] == 11){
        var url = ('JPEG/J' + deck[0]['suit'] + '.jpg');
    }
    else if (deck[0]['point'] == 12){
        var url = ('JPEG/Q' + deck[0]['suit'] + '.jpg');
    }
    else {
        var url = ('JPEG/K' + deck[0]['suit'] + '.jpg');
    }
    console.log(url);
    return url;
}
getCardImageUrl();
//adding the points from the 'point' object
function calculatePoints(){
    playerPoints = 0;
    for(let e = 0; e < playerHand.length; e++){
        if (playerHand[e]['point'] == 1){
            playerPoints += 1;
        }
        else if (playerHand[e]['point'] == 2){
            playerPoints += 2;
        }
        else if (playerHand[e]['point'] == 3){
            playerPoints += 3;
        }
        else if (playerHand[e]['point'] == 4){
            playerPoints += 4;
        }
        else if (playerHand[e]['point'] == 5){
            playerPoints += 5;
        }
        else if (playerHand[e]['point'] == 6){
            playerPoints += 6;
        }
        else if (playerHand[e]['point'] == 7){
            playerPoints += 7;
        }
        else if (playerHand[e]['point'] == 8){
            playerPoints += 8;
        }
        else if (playerHand[e]['point'] == 9){
            playerPoints += 9;
        }
        else if (playerHand[e]['point'] == 10 || playerHand[e]['point'] == 11 || playerHand[e]['point'] == 12 || [playerHand[e]['point'] == 13] ){
            playerPoints += 10;
        }
    }
    console.log(playerPoints);
};
calculatePoints();

function disPPoints(){
    var pPoints = document.querySelector('.playerPoint');
    pPoints.textContent = playerPoints;
}

function calculatePoint(){
    dealerPoints = 0;
    for(let e = 0; e < dealerHand.length; e++){
        if (dealerHand[e]['point'] == 1){
            dealerPoints += 1;
        }
        else if (dealerHand[e]['point'] == 2){
            dealerPoints += 2;
        }
        else if (dealerHand[e]['point'] == 3){
            dealerPoints += 3;
        }
        else if (dealerHand[e]['point'] == 4){
            dealerPoints += 4;
        }
        else if (dealerHand[e]['point'] == 5){
            dealerPoints += 5;
        }
        else if (dealerHand[e]['point'] == 6){
            dealerPoints += 6;
        }
        else if (dealerHand[e]['point'] == 7){
            dealerPoints += 7;
        }
        else if (dealerHand[e]['point'] == 8){
            dealerPoints += 8;
        }
        else if (dealerHand[e]['point'] == 9){
            dealerPoints += 9;
        }
        else if (dealerHand[e]['point'] == 10 || dealerHand[e]['point'] == 11 || dealerHand[e]['point'] == 12 || [dealerHand[e]['point'] == 13] ){
            dealerPoints += 10;
        }
    }
    console.log(dealerPoints);
};
calculatePoint();

function disDPoints(){
    var dPoints = document.querySelector('.dealerPoint');
    dPoints.textContent = dealerPoints;
}


function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

var playerBust = false;
var dealerBust = false;
function bust(){
    if(playerPoints > 21){
        var busts = document.querySelector('.bust');
        busts.textContent = "Congrats You Busted!";
        playerBust = true;
    }
    else if(dealerPoints > 21){
        var busts = document.querySelector('.bust');
        busts.textContent = "Dealer Busted!";
        dealerBust = true;
    }
};


