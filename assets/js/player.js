const modalDis = document.querySelector('#modal-bg');
const winDis = document.querySelector('#win');
const lossDis = document.querySelector('#loss');
//puts player into the global scope
let player;
//sets player stats
function Player(classType, health, mana, strength, agility, speed){
   this.classType = classType;
   this.health = health;
   this.mana = mana;
   this.strength = strength;
   this.agility = agility;
   this.speed = speed;
}
//allows player to attack 
let playerMoves ={
   // calcualates attack damage then adds a random number to create attack
   calAttack: function() {
       let getPlayerSpeed = player.speed;
       let getEnemySpeed = enemy.speed;
       let playerAttack = function() {
         let calBaseDamage;
         if (player.mana >0){
               calBaseDamage = player.strength * player.mana / 1000;
         }else{
            calBaseDamage = player.strength * player.agility / 1000;
         }
         let offsetDamage = Math.floor(Math.random() * Math.floor(10));
         let calOutputDamage = calBaseDamage + offsetDamage;
         let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) /2 +1);
         let attackValues = [calOutputDamage,numberOfHits];
         return attackValues;
      }
//calculates attack for enemy
      let enemyAttack = function() {
         let calBaseDamage;
         if (enemy.mana >0){
               calBaseDamage = enemy.strength * enemy.mana / 1000;
         }else{
            calBaseDamage = enemy.strength * enemy.agility / 1000;
         }
         let offsetDamage = Math.floor(Math.random() * Math.floor(10));
         let calOutputDamage = calBaseDamage + offsetDamage;
         let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10) /2 +1);
         let attackValues = [calOutputDamage,numberOfHits];
         return attackValues;
   }
   //
   let getPlayerHealth = document.querySelector(".playerhealth");
   let getEnemyHealth = document.querySelector(".enemyhealth");
   if (getPlayerSpeed >= getEnemySpeed) {
      let playerAttackValues = playerAttack();
      let totalDamage = playerAttackValues[0] * playerAttackValues[1];
      enemy.health = enemy.health - totalDamage;

      if (enemy.health <=0){
       
         getPlayerHealth.innerHTML =  player.health;
         getEnemyHealth.innerHTML = '0';
      
       modalDis.style = "visibility: visible; opacity: 1;"
       winDis.style = "visibility: visible; opacity: 1;"
      } else{
         getEnemyHealth.innerHTML =  enemy.health;
         let enemyAttackValues = enemyAttack();
         let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
      player.health = player.health - totalDamage;
  
      if (player.health <=0){
       
         getPlayerHealth.innerHTML = '0';
         getEnemyHealth.innerHTML =  enemy.health;
     
       modalDis.style = "visibility: visible; opacity: 1;"
      lossDis.style = "visibility: visible; opacity: 1;"
      }else{
         getPlayerHealth.innerHTML = player.health;
      }
      }
   }
   else if (getEnemySpeed >= getPlayerSpeed) {
      let enemyAttackValues = enemyAttack();
      let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
      player.health = player.health - totalDamage;

      if (player.health <=0){
         
         getEnemyHealth.innerHTML = enemy.health;
         getPlayerHealth.innerHTML = '';
        
        modalDis.style = "visibility: visible; opacity: 1;"
        lossDis.style = "visibility: visible; opacity: 1;"
      } else{
         getPlayerHealth.innerHTML = player.health;
         let playerAttackValues = playerAttack();
         let totalDamage = playerAttackValues[0] * playerAttackValues[1];
      enemy.health = enemy.health - totalDamage;
   
    
      if (enemy.health <=0){
        
         getEnemyHealth.innerHTML = '0';
         getPlayerHealth.innerHTML =  player.health;
        
        modalDis.style = "visibility: visible; opacity: 1;"
        winDis.style = "visibility: visible; opacity: 1;"
      }else{
         getEnemyHealth.innerHTML =  enemy.health;
      }
      }
   }
   }
   
}
