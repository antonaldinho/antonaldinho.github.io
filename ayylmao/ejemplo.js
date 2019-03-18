console.log('Hola');
const geoCode = function(city, callback) {
    setTimeout( function() {
        const data = {
            lat: 0,
            long: 0
        }
        callback(data);
    }, 2000);
}

geoCode('Monterrey', function(data) {
    console.log(data);
})