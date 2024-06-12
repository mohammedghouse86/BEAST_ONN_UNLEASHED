// how to connect to basic mongo db server
const mongoose = require('mongoose')
const mongoURI = 'mongodb://localhost:27017/beast_onn_unleashed'
const connectToMongo = () =>{
    mongoose.connect(mongoURI, ()=>{
        console.log("MONGO DB SERVER CONNECTED");
    })
}
module.exports = connectToMongo