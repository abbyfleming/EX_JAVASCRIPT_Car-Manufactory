
function Car () {
  this.manufacturedDate = Date.now();
}


function YourFavoriteMake () {
  this.manufacturer = "Nissan";
}
YourFavoriteMake.prototype = new Car();


function YourFavoriteModel () {
  this.name = "Versa";
  this.horsepower = "109-hp 1.6-liter 4-cylinder engine";
  this.cargo = "38.3 sq ft";
}
YourFavoriteModel.prototype = new YourFavoriteMake();


let myFirstFavoriteCar = new YourFavoriteModel();
  myFirstFavoriteCar.plate_number = "ABBY01";
  myFirstFavoriteCar.color = "Red";
  myFirstFavoriteCar.year = "2010";
//console.log("myFirstFavoriteCar", myFirstFavoriteCar); 

let mySecondFavoriteCar = new YourFavoriteModel();
  mySecondFavoriteCar.plate_number = "ABBY02";
  mySecondFavoriteCar.color = "Ice Blue";
  mySecondFavoriteCar.year = "2017";
//console.log("mySecondFavoriteCar", mySecondFavoriteCar); 

let myThirdFavoriteCar = new YourFavoriteModel();
  myThirdFavoriteCar.plate_number = "ABBY03";
  myThirdFavoriteCar.color = "Black";
  myThirdFavoriteCar.year = "2015";
//console.log("myThirdFavoriteCar", myThirdFavoriteCar); 

function AnotherModel () {
  this.name = "Altima"
  this.horsepower = "179-hp 2.5-liter DOHC 16-valve 4-cylinder engine";
  this.cargo = "15.4 cu ft"
}
AnotherModel.prototype = new YourFavoriteMake();

let myFasterCar = new AnotherModel();
  myFasterCar.color = "Silver";
  myFasterCar.plate_number = "ABBYIZFAST";
//console.log("myFasterCar", myFasterCar); 