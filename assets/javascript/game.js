document.getElementById("gamestart").addEventListener("click", function(){
    if(repeat == false){
game();
    }
})
var winCount = 0;
var lossCount =0;
var userScore =0;
var repeat = false;
var randNum = 0;
function game(){
    var gem1 = Math.floor(Math.random()*11)+1;
    var gem2 = Math.floor(Math.random()*11)+1;
    var gem3 = Math.floor(Math.random()*11)+1;
    var gem4 = Math.floor(Math.random()*11)+1;
    repeat=true;
randNum = (Math.floor(Math.random()*100)+20);
document.getElementById("random-number").textContent = randNum;
console.log(gem1);
document.getElementById("bluegem").addEventListener("click", function(){
    userScore = userScore + gem1;
    document.getElementById("user-score").textContent = userScore;
    scoreEvaluator()
})
document.getElementById("greengem").addEventListener("click", function(){
    userScore = userScore + gem2;
    document.getElementById("user-score").textContent = userScore;
    scoreEvaluator()
})
document.getElementById("purplegem").addEventListener("click", function(){
    userScore = userScore + gem3;
    document.getElementById("user-score").textContent = userScore;
    scoreEvaluator()
})
document.getElementById("redgem").addEventListener("click", function(){
    userScore = userScore + gem4;
    document.getElementById("user-score").textContent = userScore;
    scoreEvaluator()
})
console.log(userScore);
console.log(randNum);

function scoreEvaluator(){
if (userScore >=randNum){
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
    repeat = false;

}
}
}
