var array = ["magician1","magician2","magician3"]
var greats = []
function make_great(array){
for( let i=0;i<array.length;i++){
    greats.push("the Great " + array[i])
}
return greats}

function show_magicians(array){
    array.forEach(function(i){
             console.log(i);
         })
}
console.log("original array:")
show_magicians(array)

console.log("the copy of array with Great: ")
make_great(array)
show_magicians(greats)