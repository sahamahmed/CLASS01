function sandwich_items() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    var items = [];
    items.push(item);
    console.log("Summary of sandwich being ordered: ");
    return items;
}
console.log(sandwich_items("tomato"));
console.log(sandwich_items("tomato", "lettuce", "chicken"));
console.log(sandwich_items("tomato", "chicken"));
