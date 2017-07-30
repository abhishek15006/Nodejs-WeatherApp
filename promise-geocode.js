const request = require('request');
function geocodeLocation(address){
    return new Promise((resolve,reject)=>{
        var addr = encodeURIComponent(address);
        request(
        {
            url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + addr ,
            json: true
        },(error, response, body)=>{
            if(error){
                reject('Unable to fetch location');
            }else if(body.status!=='OK'){
                reject('Unable to find the address');
            }else{
                resolve({
                    addr: body.results[0].formatted_address,
                    lat: body.results[0].geometry.location.lat,
                    lng: body.results[0].geometry.location.lng
                });
        }
        }
        );
    });
}
module.exports.geocodeLocation = geocodeLocation;