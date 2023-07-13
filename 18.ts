//18
// Array of places to visit
var places= ["Toronto", "Paris", "London", "Greece", "New York"]
console.log("Original order: " + places)
console.log("Alphabetical order: " + places.slice().sort())
console.log("Original order (after alphabetical sort): " + places)
console.log("Reverse alphabetical order: " + places.slice().sort().reverse())
console.log("Original order (after reverse alphabetical sort): " + places)
places.reverse()
console.log("Reversed order: " + places)
places.reverse()
console.log("Original order (after double reverse): " + places)
places.sort()
console.log("Alphabetical order (after sort): " + places)
places.sort().reverse()
console.log("Reverse alphabetical order (after sort): " + places)



