var enemy = ['Zeddicus', 'Paul', 'Bigby', 'Merlin', 'Allanon', 'Ganondorf', 'Zemenar', 'Evard', 'Radagast', 'Gereth', 'Alodar', 'Thulsa', 'Caecilius', 'Kvothe', 'Jozef', 'Lucius', 'Venkalth', 'Viktor', 'Sepitus', 'Theodoric', 'Vome', 'Bludwan', 'Zul', 'Cinder', 'Nightshade', 'Leviathan'];  
var enemyInfo = [
    {
        name: "Zeddicus",
        health: 100,
        attack: 25,
        defense: 13,
        speed: 46,
    },
    {
        name: "Paul",
        health: 120, //plus 20 health for each enemy
        attack: 31, // plus 4 for rest of stats
        defense: 17,
        speed: 52,
    },
    {
        name: "Bigby",
        health: 140, 
        attack: 37, 
        defense: 21,
        speed: 58,
    },
    {
        name: "Merlin",
        health: 160, 
        attack: 43, 
        defense: 25,
        speed: 63,
    },
    {
        name: "Allanon",
        health: 180, 
        attack: 49,
        defense: 29,
        speed: 69,
    },
    {
        name: "Ganondorf",
        health: 200, 
        attack: 55, 
        defense: 33,
        speed: 74,
    },
    {
        name: "Zemenar",
        health: 220, 
        attack: 61, 
        defense: 37,
        speed: 81,
    },
    {
        name: "Evard",
        health: 240, 
        attack: 67,
        defense: 41,
        speed: 84,
    },
    {
        name: "Radagast",
        health: 260, 
        attack: 73, 
        defense: 45,
        speed: 89,
    },
    {
        name: "Gereth",
        health: 280, 
        attack: 79, 
        defense: 49,
        speed: 96,
    }
];

//Player Name from input
var getPlayerName = function() {
    var name = "";
  
    return name;
}

//player stats
var playerInfo = {
    name: "hello", //add from input function
    health: [],
    attack: [],
    defense: [],
    speed: [],
    reset: function() {
      this.health = 100;
      this.attack = 25;
      this.defense = 15;
      this.speed = 50;
    }, 
}


//start game function
var startGame = function() {
    //resetting the player health
    playerInfo.reset();
    console.log(playerInfo)
  
    
    for (i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0){
  
            var currentEnemy = enemyInfo[i];

            console.log(currentEnemy)
  
            fight(currentEnemy, i);
        }
    };
};

//player stat increase based on enemy name
        //playerInfo.health = 100;
        //playerInfo.health = playerInfo.health + (20 * 1);

        //playerInfo.attack = 25;
        //playerInfo.attack = playerInfo.attack + (5 * 1)

        //playerInfo.defense = 15;
        //playerInfo.defense = playerInfo.defense + (5 * 1)

        //playerInfo.speed = 50;
        //playerInfo.speed = playerInfo.speed + (5 * 1)

        //console.log(playerInfo);

//fight function
var fight = function(currentEnemy, i) {

    //player stats based on current enemy !!NEEDS to be moved to own function just in case player skips!
    console.log(i)
    playerInfo.health = 100
    playerInfo.health = playerInfo.health + (20 * i);
    playerInfo.attack = 25;
    playerInfo.attack = playerInfo.attack + (5 * i)
    playerInfo.defense = 15;
    playerInfo.defense = playerInfo.defense + (5 * i)
    playerInfo.speed = 50;
    playerInfo.speed = playerInfo.speed + (5 * i)

    console.log(playerInfo.health)

  var isPlayerTurn = true;
    if (currentEnemy.speed > playerInfo.speed) {
      isPlayerTurn = false;
    }

  console.log(isPlayerTurn);

    while (currentEnemy.health > 0 && playerInfo.health > 0) {
        if (isPlayerTurn) {
            //players damage output vs current enemy
            var playerDamage = playerInfo.attack - currentEnemy.defense; 
            //enemy takes damage     
            currentEnemy.health = currentEnemy.health - playerDamage
            //Log a resulting message to the console
            console.log(
                playerInfo.name + " attacked " + currentEnemy.name + " for " + playerDamage + ". " + currentEnemy.name + " now has " + currentEnemy.health + " health remaining."
            );
        
    
            //check enemy's health
            if (currentEnemy.health <= 0) {
              console.log(currentEnemy.name + " has died!");
              break;
            } 
            else {
             console.log(currentEnemy.name + " still has " + currentEnemy.health + " health left.");
            } 

            //enemys damage output against player
            var enemyDamage = currentEnemy.attack - playerInfo.defense         
            playerInfo.health = playerInfo.health - enemyDamage;    
            //Log a resulting message to the console
            console.log(
              currentEnemy.name + " attacked " + playerInfo.name + " for " + enemyDamage + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
            );

            //check player's health
            if (playerInfo.health <= 0) {
              console.log(playerInfo.name + " has died!");
              break;
            }    
            else {
              console.log(playerInfo.name + " still has " + playerInfo.health + " health left.");
            }
        } 
        else {
            //enemys damage output against player
            var enemyDamage = currentEnemy.attack - playerInfo.defense         
            playerInfo.health = playerInfo.health - enemyDamage;    
            //Log a resulting message to the console
            console.log(
            currentEnemy.name + " attacked " + playerInfo.name + " for " + enemyDamage + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
            );

                //check player's health
                if (playerInfo.health <= 0) {
                    console.log(playerInfo.name + " has died!");
                    break;
                }    
            else {
            //players damage output vs current enemy
            var playerDamage = playerInfo.attack - currentEnemy.defense; 
            //enemy takes damage     
            currentEnemy.health = currentEnemy.health - playerDamage
            //Log a resulting message to the console
            console.log(
            playerInfo.name + " attacked " + currentEnemy.name + " for " + playerDamage + ". " + currentEnemy.name + " now has " + currentEnemy.health + " health remaining."
            );


                //check enemy's health
                if (currentEnemy.health <= 0) {
                    console.log(currentEnemy.name + " has died!");
                    playerInfo.health = 100 
                    playerInfo.health = playerInfo.health + (20 * i);
                    break;
                } 
            }
        }
    }
};

//start fight
var start = function() {
    startGame();
};

start();