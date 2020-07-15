const playerScoreText = document.getElementById("playerScore")
const computerScoreText=document.getElementById("computerScore");
const Rock = document.querySelector("#rock");
const Paper = document.querySelector("#paper");
const Scissors = document.querySelector("#scissors");
const resultContainer = document.querySelector(".results");
const result1 = document.createElement("p");
resultContainer.appendChild(result1);
const computerResult = document.createElement("p");
resultContainer.appendChild(computerResult);
const winner = document.createElement("p");
resultContainer.appendChild(winner);
let values = ["Rock", "Paper", "Scissors"];
let computerCount = 0; 
let playerCount = 0; 
let gameCount = 0; 

    //computerPlay generates a random string from (Rock,Paper,Scissor)
function computerPlay(){         
        let valueIndex = Math.floor(Math.random()*values.length);
        return values[valueIndex];
    }
    //playRound plays a round of Rock paper scissors  and based on the player's choice and computers random generated choice returns an outcome
function playRound(playerHand, computerHand){
        playerHand=playerHand.toUpperCase(); 
        computerHand=computerHand.toUpperCase(); 

if(playerHand == computerHand){
        
        winner.textContent ="";
        gameCount++;
        result1.textContent = "You Both Draw";
        computerScoreText.innerHTML=computerCount;
        playerScoreText.innerHTML = playerCount;
        }
        
else if (playerHand == "ROCK" && computerHand == "PAPER")
        {

        winner.textContent ="";    
        gameCount++;
        computerCount++;
        result1.textContent = "YOU LOST! Paper beats Rock";
        computerScoreText.innerHTML=computerCount;
        playerScoreText.innerHTML = playerCount;
    }
else if (playerHand == "ROCK" && computerHand =="SCISSORS")
        {

        winner.textContent ="";    
        gameCount++;
        playerCount++;
        result1.textContent = "YOU WON! Rock beats Scissors";
        playerScoreText.innerHTML = playerCount;   
        computerScoreText.innerHTML=computerCount;
    }
else if (playerHand == "PAPER" && computerHand == "ROCK")
        {
        
        winner.textContent ="";
        gameCount++;
        playerCount++;
        result1.textContent = "YOU WON! Paper beats Rock";
        playerScoreText.innerHTML = playerCount;     
        computerScoreText.innerHTML=computerCount;
        }
else if (playerHand == "PAPER" && computerHand == "SCISSORS"){
        
        winner.textContent ="";
        gameCount++;
        computerCount++;
        result1.textContent =  "YOU LOST! Scissors  beat Paper"  ;
        computerScoreText.innerHTML=computerCount;
        playerScoreText.innerHTML = playerCount;
    }
else if (playerHand == "SCISSORS" && computerHand =="ROCK"){
        
        winner.textContent ="";
        gameCount++
        computerCount++;
        result1.textContent  = "YOU LOST! Rock beats Scissors";
        computerScoreText.innerHTML=computerCount ;
        playerScoreText.innerHTML = playerCount;   
        }
else if (playerHand == "SCISSORS" && computerHand =="PAPER"){
        
        winner.textContent ="";
        gameCount++;
        playerCount++;
        result1.textContent  ="YOU WON! Scissors beat Paper";
        playerScoreText.innerHTML = playerCount;    
        computerScoreText.innerHTML=computerCount;
        
        }
else {
         result1.textContent = "Invalid String"
        }   
        if (gameCount == 5  && computerCount > playerCount){

            winner.textContent = "The Computer Won " + computerCount + " - " +  playerCount;
            result1.textContent="";
            computerResult.textContent="";
            computerCount = 0;
            playerCount= 0;
            gameCount = 0;
            playerScoreText.innerHTML = playerCount;
            computerScoreText.innerHTML=computerCount;
               
          }
          else if (gameCount == 5 && playerCount > computerCount){
           
            winner.textContent = "You win! " + playerCount + " - " + computerCount;
            result1.textContent="";
            computerResult.textContent="";
            computerCount = 0;
            playerCount = 0;
            gameCount = 0;
            playerScoreText.innerHTML = playerCount;
            computerScoreText.innerHTML=computerCount;
             
          }
          else if (gameCount == 5 && playerCount == computerCount){
           
            winner.textContent = "Its a TIE! " + playerCount + " - " + computerCount;
            result1.textContent="";
            computerResult.textContent="";
            playerScoreText.innerHTML = playerCount;
            computerScoreText.innerHTML=computerCount;
            computerCount = 0;
            playerCount = 0;
            gameCount = 0; 
        }
    }
        Rock.addEventListener("click",()=>{
            playRound("rock",computerPlay());
        })
        Paper.addEventListener("click",()=>{
            playRound("paper",computerPlay());
        })
         Scissors.addEventListener("click",()=>{
            playRound("scissors",computerPlay());
        })

        //Game function plays 5 rounds of rock paper scissors and based on the points the player and computer have prints out who won 
        // it also prints out the standings after each round
/*function game(){
    while(gameCount <= 5){
        computerHand = computerPlay();
        computerHand = computerHand.toUpperCase();
        playerHand = prompt("Rock Paper or Scissors").toUpperCase();
        console.log(playRound(playerHand , computerHand));
        gameCount++;
        console.log ("The Score is " +playerCount + "  :  " + computerCount );
    }
    if (playerCount > computerCount){
        console.log("YOU WIN "  + "Player: " +playerCount + " Computer " + computerCount )
       }
    else if (computerCount > playerCount)
       {
        console.log("YOU LOST "  + "Player: " +playerCount + " Computer " + computerCount )
       }
    else 
       console.log("You DRAW!")
    }
   game() 
        //OPEN THE CONSOLE TO SEE RESULTS!!!!!
*/
