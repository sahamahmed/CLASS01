//30.
var user = ["admin","user1","user2","user3","user4"]
user.length = 0
if(user.length == 0){
  console.log("We need to find some users")
}
else{
for(let i=0;i<user.length;i++)
if(user[i]=="admin"){
  console.log("Hello admin, would you like to see a status report")
}
else{console.log("Hello",user[i],"thankyou for logging in")}
}

//31.changes made to excercise 30
