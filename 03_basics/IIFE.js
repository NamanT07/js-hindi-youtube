//IMMEDIATELY INVOKED FUNCTION
//iife functions are defined and executed immediately 
//used to avoid polluting the global scope 
(function chai(){//named iife
    console.log("DB CONNECTED")
})();
//remember to end iife with; else further iife created won't work
((name)=>{//innamed iife
    console.log(`CONNECTED TO DataBase2 ${name}`)
})('NAMAN');