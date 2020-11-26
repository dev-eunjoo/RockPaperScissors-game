/** 
 * Eunjoo Na, 000811369
 * Date: 2020.11.15
 * Description: rockpapercissors.js is the JavaScript file for controling Rock, Paper, Scissors game web application.
 */

 
/** 
 * execute function when the page has loaded
 * @param  {load} "load" event
 * @param  {function} function works when the event occur
 */
window.addEventListener("load", function() {

    let win =  0;   //assign win value to 0
    let lose = 0;   //assign lose value to 0

    /**
     * execute function when the user submit the form 
     * @param  {submit} "submit" event
     * @param  {function(event)} function works when the event occur
     */
    document.forms.player_form.addEventListener("submit", function(event) {
        event.preventDefault();
        changeScreen();
        displayPlayer();

        let help = document.getElementById("help");  // assign help value to element named "help"
        
        /**
         * execute function when the user click the 'help' element on the screen  
         * @param  {click} "click" event
         * @param  {function(event)} function works when the event occur
         */
        help.addEventListener("click", function(event){
            //change the className and innerHTML accoring to the current className 
            if(help.className == "help"){
                help.className = "description";
                help.innerHTML = "<div>This game is simple version of Rock, Paper, Scissors. This is a one player game and user compete with Computer. User can click the image and get the result immediately.</div>"
            } else{
                help.className = "help";
                help.innerHTML = "Help";
            }

        })

        let rock = document.getElementById("rock");  //assign rock value to element named "rock"
        let paper = document.getElementById("paper"); //assign paper value to element named "paper"
        let scissors = document.getElementById("scissors"); //assign scissors value to element named "scissors"

        
        /**
         * execute function when the user click the 'rock' element on the screen  
         * @param  {click} "click" event
         * @param  {function(event)} execute the gameResult method with parameter 0 
         */
        rock.addEventListener("click", function(event) {
            gameResult(0);
        });

        /**
         * execute function when the user click the 'paper' element on the screen  
         * @param  {click} "click" event
         * @param  {function(event)} execute the gameResult method with parameter 1 
         */
        paper.addEventListener("click", function(event) {
            gameResult(1);
        });

        /**
         * execute function when the user click the 'scissors' element on the screen  
         * @param  {click} "click" event
         * @param  {function(event)} execute the gameResult method with parameter 2
         */
        scissors.addEventListener("click", function(event) {
            gameResult(2);
        });

        displayRecord();
    });


    /**
     * change the screen by disappearing the element 
     */
    function changeScreen(){
        let formPage = document.getElementById("container");  //assign formPage value to element named "container"
        let gamePage = document.getElementById("game");  //assign gamePage value to element named "game"

        formPage.className = "disappeared";
        gamePage.className = "game";
    }

    
    /**
     * display user's information using name, age, favorite color
     */
    function displayPlayer(){
        let name = document.forms.player_form.name.value;  //assign name value to name information from the form 
        let age = document.forms.player_form.age.value;  //assign age value to age information from the form 
        let color = document.forms.player_form.favcolor.value; //assign color value to color information from the form 
        let playerMessage= document.getElementById("player"); //assign playerMessage value to element named "player"
        playerMessage.style.color = color;
        playerMessage.innerHTML = "<h1>" + name + "(age " + age  + ")</h1>";
    }

    
    /**
     * display the game record
     */
    function displayRecord(){
        let recordMessage= document.getElementById("record");
        recordMessage.innerHTML = "<h2> Win: " + win + "</h2><h2> Lose: " + lose  + "</h2>";
    }

    /**
     * display the game result by comparing with the computer's choice
     * @param  {userChoice} userChoice among rock, paper, scissors
     */
    function gameResult(userChoice){
        let computer = Math.floor(Math.random() * 3);  //assign computer value to random number among 0,1,2 
        let resultMessage= document.getElementById("result");  //assign resultMessage value to element named "result"
        let computerResult = "";  //assign computerResult value to ""
        let playerResult = "";   //assign playerResult value to ""

        if (computer === 0) {
            if(userChoice == 0){
                playerResult = "rock";
                resultMessage.innerHTML = "<h1>Draw</h1>";
            } else if(userChoice == 1){
                playerResult = "paper";
                resultMessage.innerHTML = "<h1>You Win</h1>";
                win++;
            } else{
                playerResult = "scissors";
                resultMessage.innerHTML = "<h1>You Lose</h1>";
                lose++;
            }
            computerResult = "rock";
        } else if (computer === 1) {
            if(userChoice == 0){
                playerResult = "rock";
                resultMessage.innerHTML = "<h1>You Lose</h1>";
                lose++;
            } else if(userChoice == 1){
                playerResult = "paper"
                resultMessage.innerHTML = "<h1>Draw</h1>";
            } else{
                playerResult = "scissors";
                resultMessage.innerHTML = "<h1>You Win</h1>";
                win++;
            }
            computerResult = "paper";
        } else {
            if(userChoice == 0){
                playerResult = "rock";
                resultMessage.innerHTML = "<h1>You Win</h1>";
                win++;
            } else if(userChoice == 1){
                playerResult = "paper";
                resultMessage.innerHTML = "<h1>You Lose</h1>";
                lose++;
            } else{
                playerResult = "scissors";
                resultMessage.innerHTML = "<h1>Draw</h1>";
            }
            computerResult = "scissors";
        }
        resultMessage.innerHTML += "<div id='compareResult'><div><p>You</p><img src='./" + playerResult + "_small.jpg' alt =" + playerResult + "></div><div><p>Computer</p><img src='./" + computerResult + "_small.jpg' alt =" + computerResult + "></div></div>";
        displayRecord();
            }
});