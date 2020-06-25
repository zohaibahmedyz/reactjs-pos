const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
const port = process.env.PORT || 8080


// Import Routes
const productRoute = require('./routes/ProductRoute')

// Middleware
app.use(cors());
app.use(bodyParser.json())

app.use('/products',productRoute)

app.get('/', (req,res)=>{
    res.send("we are on GET")
})

mongoose.connect(process.env.MONGODB_URI ||
    process.env.DB_CONNECTION,
    {useNewUrlParser : true, useUnifiedTopology: true }
).
then(()=>{
    console.log("Connected to MongoDB!")
}).
catch(err =>{
    console.log(err)
})

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
}

app.listen(port,()=>{
    console.log(`App listening at ${port}`)
})
