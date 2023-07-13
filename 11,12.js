//11.Names: Store the names of a few of your friends in a array called names.
//Print each person’s name by accessing each element in the list, one at a time.
var names = ["ammad", "mubashir", "hasnain", "abdullah"];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//12.Greetings: Start with the array you used in Exercise 11, 
//but instead of just printing each person’s name, print a message to them.
//The text of each message should be the same, but each message should be personalized with the person’s name
for (var j = 0; j < names.length; j++) {
    console.log("greetings my friend " + names[j]);
}
