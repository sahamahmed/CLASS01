//14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

var guest = ["babar","shahshan","ammad"]
for(var i=0 ; i<guest.length ; i++){
  console.log(guest[i],"is invited to my dinner party")
}

//15.
console.log("shahshan can not make it")
guest[1]="ali"
for(var i=0 ; i<guest.length ; i++){
  console.log(guest[i],"is now invited to my dinner party")
}

//16.
console.log("found a bigger table so 3 more people are invited")
guest.unshift("areel")
guest.splice(Math.ceil(guest.length / 2), 0, "mubashir")
guest.push("ahmed")
guest.forEach(function (j) {
  console.log(j, "is invited to the dinner party");
});

//17
console.log("bad news! we can only invite 2 people")
let k = guest.length
console.log(k)
while(k>2){
  var x = guest.pop()
  console.log("sorry "+x+" , u are not invited")
  k--
}
guest.forEach(function (m) {
  console.log(m, "is still invited to the dinner party");
});
for(let i=0;i<2;i++){
  guest.pop()
}
console.log("after removing the remaining 2 guests, the list is: ",guest)

//19., using excercise 17
console.log("finally the numbers[i] of people invited are",guest.length)
