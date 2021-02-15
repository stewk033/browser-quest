<<<<<<< HEAD
=======


>>>>>>> 38bc06677ea1a7062a7b72309419fae98af14812
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const img = document.getElementById('source');
const img1 = document.getElementById('source1');
<<<<<<< HEAD

window.onload = function() {
    // set canvas to max width/height
    context.canvas.width = window.innerWidth
    context.canvas.height = window.innerHeight
    // add image to canvas
    context.drawImage(img, 0, 0, window.innerWidth, window.innerHeight)
    // context.clearRect(100, 100, 50, 50)

    // let flag = false

    // setInterval(() => {
    //     if (flag) {
    //         context.drawImage(img, 0, 0, window.innerWidth, window.innerHeight)
    //         context.fillText("Browser Quest", 10, 50);
    //         flag = false
    //     } else {
    //         context.drawImage(img1, 100, 100, 50, 50)
    //         flag = true
    //     }
    // }, 175);


=======
// loads Canvas API
window.onload = function() {
    
    context.canvas.width = window.innerWidth
    context.canvas.height = window.innerHeight
    
    context.drawImage(img, 0, 0, window.innerWidth, window.innerHeight)
>>>>>>> 38bc06677ea1a7062a7b72309419fae98af14812
    // add title to canvas
    context.font = "60px Luminari";
    context.fillStyle = "white";
    context.fillText("Browser Quest", 10, 50);
}
<<<<<<< HEAD

window.onresize = function() {
    // set canvas to adjust with screen size
=======
 // set canvas to adjust with screen size
window.onresize = function() {
   
>>>>>>> 38bc06677ea1a7062a7b72309419fae98af14812
    context.canvas.width = window.innerWidth
    context.canvas.height = window.innerHeight
    context.drawImage(img, 0, 0, window.innerWidth, window.innerHeight)
    context.font = "60px Luminari";
    context.fillStyle = "white";
    context.fillText("Browser Quest", 10, 50)
}
<<<<<<< HEAD
=======
// when a character is chosen the game manager function  sets the hero 
>>>>>>> 38bc06677ea1a7062a7b72309419fae98af14812
let gameManager = {
    
    setGameStart: function(classType){
        this.resetPlayer(classType);
        this.setPreFight();
    },
<<<<<<< HEAD
=======
    // when character is chosen the reset player function 
>>>>>>> 38bc06677ea1a7062a7b72309419fae98af14812
    resetPlayer: function(classType){
        switch (classType){
            case "Minotaur":
                player = new Player(classType, 200, 0, 200, 100, 50);
           break;
           case "Satyr":
            player = new Player(classType, 80, 0, 50, 200, 50);
       break;
       case "Quillboar":
        player = new Player(classType, 100, 0, 200, 150, 200);
        break;
        }
<<<<<<< HEAD
        let gethero = document.querySelector(".hero");
        gethero.innerHTML = '<img src="./assets/images/'+
        classType.toLowerCase() + '.jpg" class="image-avatar"><div><h3>'+classType + '</h3><p class="health-player">Health:'+player.health+' </p><p>Mana:'+player.mana+' </p><p>Strength:'+player.strength+' </p><p>Agility:'+player.agility+'  </p><p>Speed:'+player.speed+'  </p></div>';
    },
    setPreFight: function() {
            let getheader = document.querySelector(".header");
            let getactions = document.querySelector(".actions");
            let getarena = document.querySelector(".arena");
            getheader.innerHTML = '<p>Task: Find an enemy!</p>';
            getactions.innerHTML = '<a href="#" class="btn-prefight" onclick="gameManager.setFight()">Search for enemy!</a>';
            getarena.style.visibility = "visible";
    },
   setFight: function() {
    let getheader = document.querySelector(".header");
    let getactions = document.querySelector(".actions");
    let getenemy = document.querySelector(".enemy");
    //create enemy
    let enemy00 = new Enemy("Peasant" ,100 ,0 , 50 ,100 , 100);
    let enemy01 = new Enemy("Knight" ,100 ,0 , 50 ,100 ,80 ,100);
=======
        // changes hero div to the selected character
        // player name
        let getHeroImg = document.querySelector(".player-image");
        getHeroImg.innerHTML = '<img src="./assets/images/'+
        classType.toLowerCase() + '.jpg" class="image-avatar">';
        let getHeroHealth = document.querySelector(".playerhealth");
        getHeroHealth.innerHTML = player.health;
        let getHeroMana = document.querySelector(".playermana");
        getHeroMana.innerHTML = player.mana;
        let getHeroStrength = document.querySelector(".playerstrength");
        getHeroStrength.innerHTML = player.strength;
        let getHeroAgility = document.querySelector(".playeragility");
        getHeroAgility.innerHTML = player.agility;
        let getHeroSpeed = document.querySelector(".playerspeed");
        getHeroSpeed.innerHTML = player.speed;
    },

    // changes Index to create the arena
    setPreFight: function() {
          
            let getactions = document.querySelector(".Blazing");
            let getarena = document.querySelector(".arena");
          
            getactions.innerHTML = '<a href="#" class="btn-prefight" onclick="gameManager.setFight()">Search for enemy!</a>';
            getarena.style.visibility = "visible";
    },
    //changes the Index again to add a random enemy 
   setFight: function() {
  
    let getactions = document.querySelector(".Blazing");
    
    //creates enemy
    let enemy00 = new Enemy("Peasant" ,100 ,0 , 50 ,100 ,60, 100);
    let enemy01 = new Enemy("Knight" ,120 ,0 , 50 ,100 ,80 ,100);
>>>>>>> 38bc06677ea1a7062a7b72309419fae98af14812
    let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
    switch (chooseRandomEnemy){
        case 0:
            enemy = enemy00;
            break;
            case 1:
                enemy = enemy01;
                break;
    }
<<<<<<< HEAD
    getheader.innerHTML = '<p>Task: Choose your move</p>';
    getactions.innerHTML = '<a href="#" class="btn-prefight" onclick="playerMoves.calAttack()">Attack!</a>';
    getenemy.innerHTML = '<img src="./assets/images/'+
    enemy.enemyType.toLowerCase() + '.jpg" class="image-avatar"><div><h3>'+enemy.enemyType + '</h3><p class="health-enemy">Health:'+enemy.health+' </p><p>Mana:'+enemy.mana+' </p><p>Strength:'+enemy.strength+' </p><p>Agility:'+enemy.agility+'  </p><p>Speed:'+enemy.speed+'  </p></div>';
   }
=======
 
    getactions.innerHTML = '<a href="#" class="btn-prefight" onclick="playerMoves.calAttack()">Attack!</a>';
    
    
    let getEnemyName = document.querySelector(".enemy-name");
        getEnemyName.innerHTML = enemy.enemyType;
  
         let getEnemyImg = document.querySelector(".enemy-image");
        getEnemyImg.innerHTML = '<img src="./assets/images/'+
   enemy.enemyType.toLowerCase() + '.jpg" class="image-avatar">';
   
   let getEnemyHealth = document.querySelector(".enemyhealth");
         getEnemyHealth.innerHTML = enemy.health;
   
         let getEnemyMana = document.querySelector(".enemymana");
         getEnemyMana.innerHTML = enemy.mana;
   
         let getEnemyStrength = document.querySelector(".enemystrength");
        getEnemyStrength.innerHTML = enemy.strength;
   
        let getEnemyAgility = document.querySelector(".enemyagility");
        getEnemyAgility.innerHTML = enemy.agility;
   
        let getEnemySpeed = document.querySelector(".enemyspeed");
         getEnemySpeed.innerHTML = enemy.speed;
}
>>>>>>> 38bc06677ea1a7062a7b72309419fae98af14812
}

