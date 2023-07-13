//32.
var current_users = ["ali", "ahmed", "saira", "abdullah", "ayesha"]

var new_users = ["hamdan", "yasir", "ali", "babar", "Abdullah"]

var lowercase_current_users = current_users.map(function(user) {
  return user.toLowerCase();
});
 
for (var i = 0; i < new_users.length; i++) {
  var new_username = new_users[i]
  var lowercase_new_username = new_username.toLowerCase()
  if (current_users.indexOf(lowercase_new_username)!= -1) {
    console.log("The username '" + new_username + "' is not available. Please enter a new username.");
  } else {
    console.log("The username '" + new_username + "' is available.")
  }
}