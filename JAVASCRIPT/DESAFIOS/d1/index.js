
let food = 'burger';
document.getElementById("text").innerHTML = food;

let car = {
    carColor : 'Green',
    carModel : 'Model 9292922',

    printCar : function(){
        console.log('Car ' + this.carModel);
    }
}
car.printCar();