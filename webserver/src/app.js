const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

//define paths for express
const uiPath = path.join(__dirname, '../UI');
const partialPath = path.join(__dirname, '../templates/partials');
const viewsPath = path.join(__dirname, '../templates/views');

//setup static directory 
app.use(express.static(uiPath));

//handlebars engine and views location 
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialPath);


app.get('', (req, res) => {
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


app.get('*', (re, res) => {
    res.render("error", {
        message: "Oops!!! No data found"
    })
})

app.listen(3000, () => {
    console.log("server started");
})
