
function sandwich_items(...item){
    var items = []
    items.push(item)
    console.log("Summary of sandwich being ordered: ")
    return items
}

console.log(sandwich_items("tomato"))
console.log(sandwich_items("tomato","lettuce","chicken"))
console.log(sandwich_items("tomato","chicken"))