function car_details(manufacturer, model) {
    var features = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        features[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    if (features.length > 0) {
        car['features'] = features;
    }
    return car;
}
console.log(car_details("toyota", "corolla", "red", "airbags"));
