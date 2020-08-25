const https=require('https');
const http=require('http');


const url="https://api.mapbox.com/geocoding/v5/mapbox.places/Bangalore.json?limit=1&access_token=pk.eyJ1IjoiYW5kYW1heWVlIiwiYSI6ImNrZThkd3drNjFibDgycXJ6ZTQ2eTJndnYifQ.8xktAif18J2_AG-zRXubyA"

const request=https.request(url,response=>{
    let data='';
    response.on('data',chunck=>{
        data+=chunck.toString()
    })
    response.on('end',()=>{
        console.log(JSON.parse(data));
        
    })
})
request.on('error',(error)=>{
    console.error(error);
    
})
request.end()