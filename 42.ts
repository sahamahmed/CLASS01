var array = ["magician1","magician2","magician3"]
function make_great(){
for( let i=0;i<array.length;i++){
    array[i] = "the Great "+ array[i]
}}

function show_magicians(){
    array.forEach(function(i){
             console.log(i);
         })
}
console.log("original array:")
show_magicians()
make_great()
console.log("array after modification:")
show_magicians()
