// in this file will approach diffrent cases for "this" keyword


// on file start it create the gloabl exuction scoop 
// at this time "this" will refeer to the global window object 

// any variable declared here with "var" keyword will be attach to global window object
this.name = 'value form global context';
var testValue = 'some test value';

console.log('this keyword form global execution scoop', this);

var person = {
    name: 'value from person object',
    anotherFunction : function() {
        console.log(this.name);
    },

    prinName : function() {

        const printArrowFunction = () => {
            console.log('printArrowFunction ', this.name);
        }   


        // here it should be like the name value inside person object 'value from person object'
        console.log(this.name);
        
        // on call this function will create new excution context and "this" will referr to "person object"
        this.anotherFunction();

        // on call this function will create new excution context and "this" will referr to "global scoop" which is weird behavior 
        // to avoid this issue we can use "self" variable approech 
        printInsideFunction();

        // arrow funcion will use upper scoop "person object scoop"
        printArrowFunction();

        function printInsideFunction() {
            console.log(this.name);
        }


    }


}

// now it create new excution context
person.prinName();


console.log(this.person);