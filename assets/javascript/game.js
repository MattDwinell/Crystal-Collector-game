document.getElementById("gamestart").addEventListener("click", function(){
    if(repeat == false){
        gameOver = false;
game();
    }
})
var winCount = 0;
var lossCount =0;
var userScore =0;
var repeat = false;
var gameOver = false;
var randNum = 0;
var gem1 = 0;
var gem2 =0;
var gem3 = 0;
var gem4 = 0;

function game(){
    userScore = 0;
    gem1 = Math.floor(Math.random()*12)+1;
    gem2 = Math.floor(Math.random()*12)+1;
    gem3 = Math.floor(Math.random()*12)+1;
    gem4 = Math.floor(Math.random()*12)+1;
    repeat=true;
randNum = (Math.floor(Math.random()*101)+19);
document.getElementById("random-number").textContent = randNum;
console.log(gem1);
document.getElementById("bluegem").onclick = function(){
    if(gameOver==false){
    userScore = (userScore + gem1);
    document.getElementById("user-score").textContent = userScore;
    scoreEvaluator();
    }
}
document.getElementById("greengem").onclick = function(){
    if(gameOver==false){
    userScore = userScore + gem2;
    document.getElementById("user-score").textContent = userScore;
    scoreEvaluator();
    }
}
document.getElementById("purplegem").onclick =  function(){
    if(gameOver==false){
    userScore = userScore + gem3;
    document.getElementById("user-score").textContent = userScore;
    scoreEvaluator();
    }
}
document.getElementById("redgem").onclick = function(){
    if(gameOver==false){
    userScore = userScore + gem4;
    document.getElementById("user-score").textContent = userScore;
    scoreEvaluator();
    }
}
console.log(userScore);
console.log(randNum);
}
function scoreEvaluator(){
if ((userScore >=randNum) && (randNum != 0)){
    console.log("if statement running");
    if (userScore == randNum){
        winCount ++;
        document.getElementById("winlossmessage").textContent=("You win!");
document.getElementById("winnum").textContent = winCount;
    } else{
        lossCount ++;
        document.getElementById("lossnum").textContent = lossCount;
        document.getElementById("winlossmessage").textContent=("You lose!");
    }
    document.getElementById("random-number").textContent = ("0");
    document.getElementById("user-score").textContent=("0");
    repeat = false;
    userScore = 0;
    randNum = 0;
    gameOver= true;
    document.getElementById("gamestart").textContent=("Try again");


}
}

