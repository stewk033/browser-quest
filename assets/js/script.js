// context.beginPath();
// context.rect(100, 50, 200, 150);
// context.fillStyle = 'blue';
// context.fill();
// context.stroke();

window.onload = function() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var img = document.getElementById('source');

    // set canvas to max width/height
    context.canvas.width = window.innerWidth
    context.canvas.height = window.innerHeight

    // add image to canvas
    context.drawImage(img, 0, 0, window.innerWidth, window.innerHeight)

    // add title to canvas
    context.font = "30px Arial";
    context.fillText("Browser Quest", 10, 50);
}
window.onresize = function() {
    // set canvas to adjust with screen size
    context.canvas.width = window.innerWidth
    context.canvas.height = window.innerHeight
    context.drawImage(img, 0, 0, window.innerWidth, window.innerHeight)
    context.font = "60px Luminari";
    context.fillStyle = "white";
    context.fillText("Browser Quest", 10, 50)
}
let gameManager = {
    
    setGameStart: function(classType){
        this.resetPlayer(classType);
        this.setPreFight();
    },
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
    let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
    switch (chooseRandomEnemy){
        case 0:
            enemy = enemy00;
            break;
            case 1:
                enemy = enemy01;
                break;
    }
    getheader.innerHTML = '<p>Task: Choose your move</p>';
    getactions.innerHTML = '<a href="#" class="btn-prefight" onclick="playerMoves.calAttack()">Attack!</a>';
    getenemy.innerHTML = '<img src="./assets/images/'+
    enemy.enemyType.toLowerCase() + '.jpg" class="image-avatar"><div><h3>'+enemy.enemyType + '</h3><p class="health-enemy">Health:'+enemy.health+' </p><p>Mana:'+enemy.mana+' </p><p>Strength:'+enemy.strength+' </p><p>Agility:'+enemy.agility+'  </p><p>Speed:'+enemy.speed+'  </p></div>';
   }
}

