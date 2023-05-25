// Bosses
class Boss {
  constructor(name, healthPoints, attackPoints) {
    this.name = name;
    this.healthPoints = healthPoints;
    this.attackPoints = attackPoints;
  }


}

// boss Lilith
let lilith = new Boss(`Lilith`, 500, 5);


//  while (lilith.healthPoints > 20) {
//   lilith.healthPoints = lilith.healthPoints-10
//   console.log(lilith.healthPoints);
//  }
//  if (lilith.healthPoints <= 20) {
//   console.log(`waazbi`);
//  }



//  boss Chronos
let chronos = new Boss(`Chronos`, 200, 10);

// boss Sauron
let sauron = new Boss('Sauron', 300, 15)


// enigmes
class enigmas {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }
}

let enigme1 = new enigmas(`1+1`, 2);
let enigme2 = new enigmas(`2+2`, 4);
let enigme3 = new enigmas(`4+4`, 8);



// heroes

// archer
class Archer {
  constructor(name, healthPoints, attackPoints, arrows) {
    this.name = prompt(`whats this archers name?`);
    this.healthPoints = 0;
    this.attackPoints = 0;
    this.arrows = 0
  }
}
let archer = new Archer()

// mage 
class Mage {
  constructor(name, healthPoints, attackPoints, mana) {
    this.name = prompt(`whats this mages name?`);
    this.healthPoints = 0;
    this.attackPoints = 0;
    this.mana = 0;
  }
}
let mage = new Mage();

// warrior
class Warrior {
  constructor(name, healthPoints, attackPoints, ragePoints) {
    this.name = prompt(`whats this warriors name?`);
    this.healthPoints = 0;
    this.attackPoints = 0;
    this.ragePoints = 0;
  }

}
let warrior = new Warrior();



// health point distribution system
let generalHitPoints = 150;

function distributeHp() {
  while (generalHitPoints > 0) {
    heroChoice = prompt(`you have ${generalHitPoints} health points left, which hero would you like to assign it to?`);

    if (heroChoice == `warrior`) {
      healthToWarrior = prompt(`how much health would you like to add to your warrior?`)
      if (healthToWarrior > generalHitPoints) {
        alert(`you dont have enough health points to spend`)
      } else {
        healthToWarrior = parseInt(healthToWarrior)
        warrior.healthPoints = warrior.healthPoints + healthToWarrior;
        generalHitPoints = generalHitPoints - healthToWarrior;
        alert(`${warrior.name}the warrior has now ${warrior.healthPoints} health`)
      }

    } else if (heroChoice == `mage`) {
      healthToMage = prompt(`how much health would you like to add to your mage?`)
      if (healthToMage > generalHitPoints) {
        alert(`you dont have enough health points to spend`)
      } else {
        healthToMage = parseInt(healthToMage)
        mage.healthPoints = mage.healthPoints + healthToMage;
        generalHitPoints = generalHitPoints - healthToMage;
        alert(`${mage.name} the mage has now ${mage.healthPoints} health`)
      }
    } else if (heroChoice == `archer`) {
      healthToArcher = prompt(`how much health would you like to add to your archer?`)
      if (healthToArcher > generalHitPoints) {
        alert(`you dont have enough health points to spend`)
      } else {
        healthToArcher = parseInt(healthToArcher)
        archer.healthPoints = archer.healthPoints + healthToArcher;
        generalHitPoints = generalHitPoints - healthToArcher;
        alert(`${archer.name} the archer has now ${archer.healthPoints} health`)
      }
    }

  }
}
 distributeHp()
let generalAttackPoints = 200;
function distributeAttackPoints() {
  while (generalAttackPoints > 0) {
    heroChoice = prompt(`you have ${generalAttackPoints} attack points left, which hero would you like to assign it to?`);


    if (heroChoice == `warrior`) {
      attackToWarrior = prompt(`how many attack points would you like to add to your warrior?`)
      if (attackToWarrior > generalAttackPoints) {
        alert(`you dont have enough attack points to spend`)
      } else {
        attackToWarrior = parseInt(attackToWarrior)
        warrior.attackPoints = warrior.attackPoints + attackToWarrior;
        generalAttackPoints = generalAttackPoints - attackToWarrior;
        alert(`${warrior.name} the warrior has now ${warrior.attackPoints} attack points`)
      }
    } else if (heroChoice == `archer`) {
      attackToArcher = prompt(`how many attack points would you like to add to your archer?`)
      if (attackToArcher > generalAttackPoints) {
        alert(`you dont have enough attack points to spend`)
      } else {
        attackToArcher = parseInt(attackToArcher)
        archer.attackPoints = archer.attackPoints + attackToArcher;
        generalAttackPoints = generalAttackPoints - attackToArcher;
        alert(`${archer.name} the archer has now ${archer.attackPoints} attack points`)
      }
    } else if (heroChoice == `mage`) {
      attackToMage = prompt(`how many attack points would you like to add to your mage?`)
      if (attackToMage > generalAttackPoints) {
        alert(`you dont have enough attack points to spend`)
      } else {
        attackToMage = parseInt(attackToMage)
        mage.attackPoints = mage.attackPoints + attackToMage;
        generalAttackPoints = generalAttackPoints - attackToMage;
        alert(`${mage.name} the mage has now ${mage.attackPoints} attack points`)
      }
    }
  }
  }
  distributeAttackPoints()
//  combat 

let party = []
party.push(warrior,mage,archer);

let totalPartyHealth = mage.healthPoints+archer.healthPoints+warrior.healthPoints;
let confirmStartFightLilith = confirm(`do you want to fight lilith`)
if (confirmStartFightLilith == true) {
  startFightLilith()
}else if (confirmStartFightLilith == false) {
  alert(`coward`)
}

function startFightLilith() {
  while (lilith.healthPoints >= 0 && totalPartyHealth >=0) {
    lilith.healthPoints -= party[0].attackPoints
   console.log(`${party[0].name} the warrior has hit Lilith for ${party[0].attackPoints} damage `);
   lilith.healthPoints -= party[1].attackPoints
   console.log(`${party[1].name} the mage has hit Lilith for ${party[1].attackPoints} damage `);
   lilith.healthPoints -= party[2].attackPoints
   console.log(`${party[2].name} the archer has hit Lilith for ${party[2].attackPoints} damage `);
  }
  if (lilith.healthPoints<= 0) {
    alert(`you have defeated Lilith!`)
  } else if (totalPartyHealth <= 0) {
    alert(`you have lost`)
  }
}
