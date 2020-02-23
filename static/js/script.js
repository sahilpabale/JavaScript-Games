// Challenge 1: Your age in days.
function ageInDays() {
    var birthYear = prompt('What is your Birth Year?');
    var age_in_days = (2020 - birthYear) * 365;
    document.getElementById('result').innerHTML = 'You are '+age_in_days+' days old...';
}

// var tagName = document.createElement('elementTagName'); is used to create an element using JavaScript
// to set any attribute we use
// tagName.setAttribute('id', 'idName');    here first argument is type of Attribute and second on is it's value

function reset() {
    // location.reload();
    // age_in_days=null;
    document.getElementById('result').remove();
}

// Challenge 2: 
function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://api.thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

var rps = ['rock', 'paper', 'scissor'];

// Challenge 3: Rock, Paper, Scissors
function rpsGame(yourChoice) {

    
    var humanChoice, botChoice;
    
    humanChoice = yourChoice.id;
    
    botChoice = numToChoice(randNum());
    
    results = decideWinner(humanChoice, botChoice);

    message = finalMsg(results);     // return an object => {'message': 'Won!', 'color':'green'}
    
    rpsFrontEnd(yourChoice.id, botChoice, message);


}

function randNum() {
    return (Math.floor(Math.random() * 3));
}

function numToChoice(number){
    return (rps[number]);
}

function decideWinner(humanChoice, botChoice) {
    var rpsDB = {
        'rock': {'scissor':1, 'rock':0.5, 'paper':0},
        'paper': {'scissor':0, 'rock':1, 'paper':0.5},
        'scissor': {'scissor':0.5, 'rock':0, 'paper':1}
    }

    var yourScore = rpsDB[humanChoice][botChoice];
    var botScore = rpsDB[botChoice][humanChoice];

    return [yourScore, botScore];
}

function finalMsg([yourScore, botScore]) {
    if(yourScore === 0){
        return {'message': 'You Lost!', 'color': 'red'};
    } else if (yourScore === 0.5) {
        return {'message': 'Game Tied!', 'color': 'yellow'};
    } else {
        return {'message': 'You Won!', 'color': 'green'};
    }
}

function rpsFrontEnd(humanImgChoice, botImgChoice, finalMSG) {
    var imgDB = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    }
    // removing all images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();
    
    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var msg = document.createElement('div');

    humanDiv.innerHTML = "<img src='"+imgDB[humanImgChoice]+"' height='250px' style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";
    msg.innerHTML = "<center><h1 style='color: " + finalMSG['color'] + "; font-size: 60px; padding: 40px;'>" + finalMSG['message'] + "</h1></center>";
    botDiv.innerHTML = "<img src='"+imgDB[botImgChoice]+"' height='250px' style='box-shadow: 0px 10px 50px rgba(214, 43, 57, 1);'>";
    
    
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(msg);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

// Challenge 4: Change color of all buttons!

var allBtns = document.getElementsByTagName('button');  // will return an array of all buttons
var resetBtns = [];
for (let i=0; i<allBtns.length; i++){
    resetBtns.push(allBtns[i].classList[1]);
}
// var resetBtns = [...allBtns];       // cloning allBtns to resetBtns i.e, copying one array to another
console.log(resetBtns);
// resetBtns[index].classList.remove('className'); // it will remove the className from the lists of class in resetBtns[index]

function btnColorChange(btnState) {
    if (btnState.value === 'red') {
        btnRed();
    }else if(btnState.value === 'green') {
        btnGreen();
    } else if(btnState.value === 'reset') {
        btnReset();
    } else if(btnState.value === 'random') {
        btnRandom();
    }
}

function btnRed() {
    for(let i=0; i<allBtns.length; i++) {
        allBtns[i].classList.remove(allBtns[i].classList[1]);
        allBtns[i].classList.add('btn-danger');
    }
}

function btnGreen() {
    for(let i=0; i<allBtns.length; i++) {
        allBtns[i].classList.remove(allBtns[i].classList[1]);
        allBtns[i].classList.add('btn-success');
    }
}

function btnReset() {
    
    for(let i=0; i<allBtns.length; i++) {
        allBtns[i].classList.remove(allBtns[i].classList[1]);
        allBtns[i].classList.add(resetBtns[i]);
        
    }
}

function btnRandom() {
    let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];
    
    for (i=0; i<allBtns.length; i++) {
        let randChNum = Math.floor(Math.random() * 4);
        allBtns[i].classList.remove(allBtns[i].classList[1]);
        allBtns[i].classList.add(choices[randChNum]);
    }
}