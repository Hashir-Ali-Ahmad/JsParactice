// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
//  ; use if two iife are in same file 
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hashir')