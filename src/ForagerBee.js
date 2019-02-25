var ForagerBee = function() {
  Bee.call(this)
    this.age = 10
    this.job = "find pollen";
    this.color = "yellow";
    this.honeyPot = 0;
    this.canFly = true;
    this.treasureChest = [];

};

ForagerBee.prototype = Object.create(Bee.prototype); //set inheritance of Grub methods
ForagerBee.prototype.constructor = ForagerBee; 


ForagerBee.prototype.forage = function (treasure){
  this.treasureChest.push(treasure)
}