const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const img = document.getElementById('source');
const img1 = document.getElementById('source1');
const avatarName = document.querySelector('#avatar-name');
const savedName = document.querySelector('#saved-name');
const nameList = document.querySelector('#name-list');
const heroDis = document.querySelector('#hero');
const sectionDis = document.querySelector('#section');
window.onload = function() {
    
    context.canvas.width = window.innerWidth
    context.canvas.height = window.innerHeight
    
    context.drawImage(img, 0, 0, window.innerWidth, window.innerHeight)
    // add title to canvas
    context.font = "60px Luminari";
    context.fillStyle = "white";
    context.fillText("Browser Quest", 10, 50);
}
 // set canvas to adjust with screen size
window.onresize = function() {
   
    context.canvas.width = window.innerWidth
    context.canvas.height = window.innerHeight
    context.drawImage(img, 0, 0, window.innerWidth, window.innerHeight)
    context.font = "60px Luminari";
    context.fillStyle = "white";
    context.fillText("Browser Quest", 10, 50)
}
avatarName.addEventListener('submit', function (event) {
    event.preventDefault();

    if (event.target["saved-name"].value.length < 1) return;
    localStorage.setItem("character", event.target["saved-name"].value);
    event.target["saved-name"].value = '';
    console.log(localStorage.getItem ("character"))
    // removes form once submitted
    avatarName.style = "display:none;"
    
}, false);

document.getElementById("random").addEventListener("click", function (event) {
    var randomName = ["Zed", "Guildor", "Rigby", "Merlin", "Allanon", "Ganondorf", "Zemenar", "Evard", "Radagast", "Gereth", "Alodar", "Thulsa", "Caecilius", "Kvothe", "Jozef", "Lucius", "Venkalth", "Viktor", "Sepitus", "Theoden", "Vome", "Bludwan", "Zul", "Cinder", "Nightshade", "Aerislore"];
    localStorage.setItem("character", randomName[Math.floor(Math.random() * randomName.length)]);
    // randomName.filter((e,i) => i === Math.floor(Math.random() * randomName.length))[0] = '';
    console.log(localStorage.getItem ("character"))
    avatarName.style = "display:none;"
})

// when a character is chosen the game manager function  sets the hero 
let gameManager = {
    
    setGameStart: function(classType){
        this.resetPlayer(classType);
        this.setPreFight();
    },
    // when character is chosen the reset player function 
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
  
        // changes hero div to the selected character
        let getHeroName = document.querySelector(".player-name");
        getHeroName.innerHTML = localStorage.getItem ("character");
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
        
        heroDis.style = "display:none;"
        sectionDis.style = "visibility: visible;opacity: 1;"
    },

    // changes Index to create the arena
    setPreFight: function() {
            let getactions = document.querySelector(".Blazing");
           
            getactions.innerHTML = '<a href="#" class="btn-prefight" onclick="gameManager.setFight()">Search for enemy!</a>';
           
    },
    //changes the Index again to add a random enemy 
   setFight: function() {
  
    let getactions = document.querySelector(".Blazing");
    
    //creates enemy
    let enemy00 = new Enemy("Peasant" ,100 ,0 , 50 ,100 ,60, 100);
    let enemy01 = new Enemy("Knight" ,120 ,0 , 50 ,100 ,80 ,100);
    let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
    switch (chooseRandomEnemy){
        case 0:
            enemy = enemy00;
            break;
            case 1:
                enemy = enemy01;
                break;
    }
 
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
}
