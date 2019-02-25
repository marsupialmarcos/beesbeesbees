var HoneyMakerBee = function(age, color, job, honeyPot) {

  Bee.call(this) // get props et up by Bee to re assign
    this.age = 10
    this.job = "make honey"
    this.color = "yellow"
    this.honeyPot = 0

};

HoneyMakerBee.prototype = Object.create(Bee.prototype); //set inheritance of Grub methods
HoneyMakerBee.prototype.constructor = HoneyMakerBee; 


//Methods - using 

HoneyMakerBee.prototype.makeHoney = function(){
    this.honeyPot += 1
}
HoneyMakerBee.prototype.giveHoney = function(){
  this.honeyPot -= 1
}


/*
{age: 10
job: "make honey"
color: "yellow"
honeypot: 0
}
*/