const mongoose = require('mongoose');


const connectionUL = 'mongodb://127.0.01:27017/task-manger-api'

mongoose.connect(connectionUL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true,
    useFindAndModify:false
});
