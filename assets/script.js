const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const img = document.getElementById('source');
const img1 = document.getElementById('source1');
const avatarName = document.querySelector('#avatar-name');
const savedName = document.querySelector('#saved-name');
const nameList = document.querySelector('#name-list');


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


    // add title to canvas
    context.font = "60px Luminari";
    context.fillStyle = "white";
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
        this.setFight();
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
        // display hero name and stats
        gethero.innerHTML = '<img src="./assets/images/'+
        classType.toLowerCase() + '.jpg" class="image-avatar"><div><h2>' + localStorage.getItem('character') + '</h2><h3>'+ classType + '</h3><p class="health-player">Health:'+player.health+' </p><p>Mana:'+player.mana+' </p><p>Strength:'+player.strength+' </p><p>Agility:'+player.agility+'  </p><p>Speed:'+player.speed+'  </p></div>';
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
