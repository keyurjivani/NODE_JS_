const mongoose = require('mongoose');
const db_conn = async() =>{
    await mongoose.connect("mongodb+srv://keyurjivani25:keyur@cluster0.ct46y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("connect");
    
}


module.exports = db_conn