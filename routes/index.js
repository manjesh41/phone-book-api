require('dotenv').config();
const express =require('express');
const router = require('./routes/phone_books-routes');
const mongoose = require('mongoose');

let port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/PhoneBook')
.then(()=>console.log('Connected to MongoDB...'))
.catch(err=>console.error('Could not connect to MongoDB...'));
const app=express();

app.use(express.json());

app.get('/',(req, res)=>{
    console.log(req);
    res.send('Hello World');
});
app.use('/PhoneBooks',router);

app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
})