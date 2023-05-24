// Bosses
class Boss {
  constructor( name , healthPoints, attackPoints){
    this.name = name;
    this.healthPoints = healthPoints;
    this.attackPoints = attackPoints;
  }
 
  
}

// boss Lilith
 let lilith =  new Boss(`Lilith`,100,5);


//  while (lilith.healthPoints > 20) {
//   lilith.healthPoints = lilith.healthPoints-10
//   console.log(lilith.healthPoints);
//  }
//  if (lilith.healthPoints <= 20) {
//   console.log(`waazbi`);
//  }

 

//  boss Chronos
let chronos = new Boss(`Chronos`,200,10);

// boss Sauron
let sauron = new Boss ('Sauron',300,15)


// enigmes
class enigmas {
constructor(question,answer){
  this.question = question;
  this.answer=answer;
}
}

let enigme1 = new enigmas(`1+1`,2);
let enigme2 = new enigmas(`2+2`,4);
let enigme3 = new enigmas (`4+4`,8);



// heroes

// warrior
class Warrior {
  constructor(name,healthPoints,attackPoints,ragePoints){
    this.name = prompt(`whats this warriors name?`);
    this.healthPoints = 0;
    this.attackPoints = 0;
    this.ragePoints = 0;
  }
  attack(){

  };
  block(){

  };
}
let warrior = new Warrior()
console.log(warrior);


// health point distribution system
let generalHitPoints = 150;

while (generalHitPoints > 0) {
  heroChoice = prompt(`you have ${generalHitPoints} health points left, which hero would you like to assign it to?`);
  
  if (heroChoice == `warrior`) {
    healthToWarrior = prompt(`how much health would you like to add to your warrior?`)
    if (healthToWarrior > generalHitPoints) {
      alert(`you dont have enough health points to spend`)
    }else{
      healthToWarrior = parseInt(healthToWarrior)
      warrior.healthPoints = warrior.healthPoints+healthToWarrior;
      generalHitPoints = generalHitPoints - healthToWarrior;
    }
    
  }
}
alert(`${warrior.healthPoints}`)