// function in java script have access only for it scoop and the global scoop
// to allow use some diffrent object scoop we can use bind method to define 
// this key word value on excuction occoured 

const product = {
    name : 'beanBag',
    price : '12',
    getName : function() {
        console.log(this.name);
    },
    getPrice : function(curruncy){
        console.log(this.price + ' ' + curruncy);
    }
}

var printProductName = function(){
    this.getName();
}.bind(product);

printProductName();

// call method is binding the value of this and execute the funcion as well 
// and can pass the funcion parmters 
var printProductPrice = function(curruncy){
    this.getPrice(curruncy);
}.call(product,'usd');


// the same as call but allow to pass the funcion argument as array 
var printProductPrice = function(curruncy){
    this.getPrice(curruncy);
}.apply(product, ['EGP']);
