const express = require('express');
const routerUser = require('./routes/user');
const routerTask = require('./routes/task');
const mongoose = require('./database/mongoose');

const app = express();
const port = process.env.PORT || 3000;



app.use(express.json());
app.use(routerUser);
app.use(routerTask);


app.listen(port)
    .once('listening', () => console.log('Server is up on port ', port))
    .once('error', () => { console.error('Unable to connect'); process.exit(1); })


