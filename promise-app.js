const yargs = require('yargs');
const geocode = require('./promise-geocode');
const weather = require('./promise-weather');
const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeLocation(argv.a).then((location)=>{
  weather.weatherInfo(location.lat,location.lng).then((temp)=>{
    console.log(`Address : ${location.addr}`);
    console.log(`Latitude : ${location.lat}`);
    console.log(`Latitude : ${location.lng}`);
    console.log(`Temperature : ${temp.temp} C`);
  });
}).catch((error)=>{
  console.log(error);
});
  

