const request = require('request');
function weatherInfo(lat,lng){
    return new Promise((resolve,reject)=>{
        
        request(
        {
            url: 'https://api.darksky.net/forecast/550679e489ba05e3ac056efbab6876d5/'+lat+','+lng,
            json: true
        },(error, response, body)=>{
            if(!error && response.statusCode===200){
                resolve({
                    temp: (body.currently.temperature - 32.0)*5.0/9.0
                })
            }else{
                reject('Unable to fetch temperature');
            }
        }
        );
    });
    
}

module.exports.weatherInfo = weatherInfo;