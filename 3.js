//question 3
//we can call functions for upper and lower case, but we will have to build a logic for titlecase
//charAt functions points to the firsr letter and we call capitalize function on it , 
//slice(1) converts remaining letters to lower
var NAME = "saham";
console.log(NAME.toUpperCase());
console.log(NAME.toLowerCase());
console.log(NAME.charAt(0).toUpperCase() + NAME.slice(1).toLowerCase());
