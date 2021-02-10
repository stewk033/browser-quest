//var enemy = ["Zeddicus, Paul, Bigby, Merlin, Allanon, Ganondorf, Zemenar, Evard, Radagast, Gereth, Alodar, Thulsa, Caecilius, Kvothe, Jozef, Lucius, Venkalth, Viktor, Sepitus, Theodoric, Vome, Bludwan, Zul, Cinder, Nightshade, Leviathan"];  
var enemyInfo = [
    {
        name: "Zeddicus",
        health: 100,
        attack: 23,
        defense: 13,
        speed: 47,
    },
    {
        name: "Paul",
        health: 120, //plus 20 health for each enemy
        attack: 27, // plus 4 for rest of stats
        defense: 17,
        speed: 51,
    },
    {
        name: "Bigby",
        health: 140, 
        attack: 31, 
        defense: 21,
        speed: 55,
    },
    {
        name: "Merlin",
        health: 160, 
        attack: 35, 
        defense: 25,
        speed: 59,
    },
    {
        name: "Allanon",
        health: 180, 
        attack: 39,
        defense: 29,
        speed: 63,
    },
    {
        name: "Ganondorf",
        health: 200, 
        attack: 43, 
        defense: 33,
        speed: 67,
    },
    {
        name: "Zemenar",
        health: 220, 
        attack: 47, 
        defense: 37,
        speed: 71,
    },
    {
        name: "Evard",
        health: 240, 
        attack: 51,
        defense: 41,
        speed: 75,
    },
    {
        name: "Radagast",
        health: 260, 
        attack: 55, 
        defense: 45,
        speed: 79,
    },
    {
        name: "Gereth",
        health: 280, 
        attack: 59, 
        defense: 49,
        speed: 83,
    }
];

//Player Name from input
var getPlayerName = function() {
    var name = "";
  
    return name;
}

//player stats
var playerInfo = {
    name: "hello", //add from input!!
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


var startGame = function() {
    console.log(playerInfo)

    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            var currentEnemy = enemyInfo[i];
        
            fight(currentEnemy);
        }
    }
};

var fight = function(currentEnemy) {
    
    //player stat increase
    playerInfo.health = 100;
    playerInfo.health = playerInfo.health + (20 * i);

    playerInfo.attack = 25;
    playerInfo.attack = playerInfo.attack + (5 * i)

    playerInfo.defense = 15;
    playerInfo.defense = playerInfo.defense + (5 * i)

    playerInfo.speed = 50;
    playerInfo.speed = playerInfo.speed + (5 * i)

    console.log(playerInfo);
    console.log(currentEnemy);

    var attackFirst = true
    if (enemyInfo.speed > playerInfo.speed) {
        attackFirst = false
    }

    if (attackFirst) {
        var playerDamage = (playerInfo.attack - currentEnemy.defense)
        var enemyDamage = (currentEnemy.attack - playerInfo.defense)
        console.log(playerDamage)
        console.log(enemyDamage)
    }
}

//start fight
var start = function() {
    playerInfo.reset();
    startGame();
}

start();