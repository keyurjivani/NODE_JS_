const express = require('express');
const db_conn = require('./db');
const User = require('./User.schema');
const cors=require("cors")
const app = express();
app.use(cors())
app.get('/', async(req, res) => {
    let data = await User.find();
    console.log("data", data);
    console.log("success");
    res.send(data);
});


app.post('/', async(req, res) => {
    let data = await User.create(req.body);
    console.log("post created");
    
    res.send(data);
});

app.delete('/:id', async(req, res) => {
    let {id} = req.params.id;
    let data = await User.findByIdAndDelete(id);
    res.send(data);
});

app.patch('/:id', async(req, res) => {
    let {id} = req.params;
    let data = await User.findByIdAndUpdate(id, req.body, {new: true});
    res.send(data);
});

app.listen(8090, ()=>{
    console.log("Connected Server");
    db_conn();
});



