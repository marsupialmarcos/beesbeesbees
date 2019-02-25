//Subclass of Bee

var Bee = function(age, color, job) { // notice new "job" property

  Grub.call(this) //props set up by new Bee class
  this.age = 5
  this.color = "yellow"
  this.job = "keep on growing"
};


Bee.prototype = Object.create(Grub.prototype); //set inheritance of Grub methods
Bee.prototype.constructor = Bee; // prototype points to constructor viceversa

//when new bee is executed
  //new bee will assign failed lookups to grub
  //new bee constructor will be assigned to Bee constructor function
  //any new methods go after this

// when you do new Bee
// it will instantiate an object and decorate it witn

