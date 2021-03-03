const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const fileUpload = require('express-fileupload');
const path  = require('path')
const cors = require('cors')


const app = express();

app.use(express.json());
app.use(fileUpload());
app.use(cors());

// DB URI
const db = config.get('mongoURI');

// Connect to DB
mongoose.connect(db, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected....'))
    .catch(err => console.log(err));

    // use routes
app.use('/api/products', require('./routes/api/products'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/message', require('./routes/api/messages'));

app.get('/', (req, res)=>{
    res.send('Welcome to the API')
})

// static assets
if(process.env.NODE_ENV === 'production'){
// set static folder
app.use(express.static('client/build'));
app.get('*', (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
});
}


const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log(`server running on port ${port}`));




