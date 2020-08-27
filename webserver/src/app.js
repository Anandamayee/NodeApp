const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const geoCode = require('./utiles/geocode');
const weatherStack = require('./utiles/weatherStack');
const { response } = require('express');

//define paths for express
const publicPath = path.join(__dirname, '../public');
const partialPath = path.join(__dirname, '../templates/partials');
const viewsPath = path.join(__dirname, '../templates/views');

//setup static directory 
app.use(express.static(publicPath));

//handlebars engine and views location 
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialPath);


app.get('/', (req, res) => {
    console.log("index");
    res.render("index", {
        title: "Hello",
        name: "Andy"
    });
});

app.get('/about', (req, res) => {
    res.send([{
        message: "Checkout about"
    },
    { message: "Checkout about" }])
});

app.get("/product", (req, res) => {
    if (!req.query.search) {
        return res.send("You must provide serach")
    }

    res.send(req.query.search);
})

app.get("/weather", (req, res) => {
    console.log("weather");
    if (!req.query.address) {
        return res.send("Please provide address")
    }
    geoCode(req.query.address, (error, response = {}) => {
        if (error) {
            return res.send({ error: error });
        }
        weatherStack(response.center,(err,data={})=>{
            if(err){
                return res.send({error:err});
            }
            return res.render("weather",{
                place_name: response.place_name,
                lattitude: response.center[0],
                longitude: response.center[1],
                weather_descriptions:data.weather_descriptions,
                temperature:data.temperature,
                wind_speed:data.wind_speed,
                humidity:data.humidity
            });
        })
    })

})



app.get('/*', (re, res) => {
    console.log("error");
    res.render("error", {
        message: "Oops!!! No data found"
    })
})

app.listen(3000, () => {
    console.log("server started");
})




