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
   let getPlayerHealth = document.querySelector(".health-player");
   let getEnemyHealth = document.querySelector(".health-enemy");
   if (getPlayerSpeed >= getEnemySpeed) {
      let playerAttackValues = playerAttack();
      let totalDamage = playerAttackValues[0] * playerAttackValues[1];
      enemy.health = enemy.health - totalDamage;
      // must remove alert
      alert("You hit" + playerAttackValues[0]+ " damage"+ playerAttackValues[1]+" times");
      if (enemy.health <=0){
         alert("youwin");
         getPlayerHealth.innerHTML = 'Health: ' + player.health;
         getEnemyHealth.innerHTML = 'Health:0';
      } else{
         getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
         let enemyAttackValues = enemyAttack();
         let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
      player.health = player.health - totalDamage;
      // must remove alert
      alert("You hit" + enemyAttackValues[0]+ " damage"+ enemyAttackValues[1]+" times");
      if (player.health <=0){
         alert("youlose");
         getPlayerHealth.innerHTML = 'Health:0';
         getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
      }else{
         getPlayerHealth.innerHTML = 'Health: ' + player.health;
      }
      }
   }
   else if (getEnemySpeed >= getPlayerSpeed) {
      let enemyAttackValues = enemyAttack();
      let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
      player.health = player.health - totalDamage;
      // must remove alert
      alert("You hit" + enemyAttackValues[0]+ " damage"+ enemyAttackValues[1]+" times");
      if (player.health <=0){
         alert("youwin");
         getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
         getPlayerHealth.innerHTML = 'Health:0';
      } else{
         getPlayerHealth.innerHTML = 'Health: ' + Player.health;
         let playerAttackValues = playerAttack();
         let totalDamage = playerAttackValues[0] * playerAttackValues[1];
      enemy.health = enemy.health - totalDamage;
      // must remove alert
      alert("You hit" + playerAttackValues[0]+ " damage"+ playerAttackValues[1]+" times");
      if (enemy.health <=0){
         alert("youlose");
         getEnemyHealth.innerHTML = 'Health:0';
         getPlayerHealth.innerHTML = 'Health: ' + player.health;
      }else{
         getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
      }
      }
   }
   }
   
}