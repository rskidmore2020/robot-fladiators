var playerName = window.prompt("What is yur robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this:
console.log(playerName, playerAttack, playerHealth);
 
var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Wleome to Robot Gladiators!");

    //Ask the player if they want to fight or skip the fight for a fee.
    var promptFight = window.prompt("Would you likt to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        // If player shooses to fight, then fight
        if (promptFight === "fight" || promptFight === "FIGHT") {
        //remove enemy's health by subtractiong the amoutn set in the playerAttack variable
        
        //Subtrat the value of 'playerAttack' from te value of 'eneyHealth' and use that result to update the value in the 'enemyHealth' variabl
        enemyHealth = enemyHealth - playerAttack;

        //Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + " attacked " + ". " + enemyName + " now has " + enemyHealth + " health remaing."
         );

        // Check ememy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' veriable
        playerHealth = playerHealth - enemyAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log( 
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // Check player's health
        if (playerHealth <=0) {
            window.alert(playerName + " has died!");
        }   
        else {
            window.alert(playerName + " stil has " + playerHealth + " health left.");
        }   
        // If player choses to skip
        } else if (promptFight === "skip" || promptFight === "Skip") {
            // confirm user wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to to skp this fight. Goodbye!");
                // Subtract money from playerMoney for skipping
                playerMoney = playerMoney - 2;
            }   
            // of no (false), ask question again by running fig() again
            else {
                fight();
            }
        } else {
            window.alert("You need to pick a valid option. Try again!");
        }
};

  fight();
  