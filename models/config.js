const mongoose = require('mongoose')
// databse conneectivity

mongoose.connect(process.env.url, { useNewUrlParser: true });
mongoose.set("strictQuery", false);
const connection = mongoose.connection;

mongoose.connection.once('open', function () {
    console.log("Mongodb connected successfully ");
})  