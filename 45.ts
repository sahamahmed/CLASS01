function car_details(manufacturer:string, model: string, ...features:string[]) {
const car = {
    manufacturer,
    model ,
}
if(features.length > 0){
    car['features'] = features
}
return car
}


console.log(car_details("toyota","corolla","red","airbags"))