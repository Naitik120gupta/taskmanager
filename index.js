const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskroutes');


require('dotenv').config();
const PORT=8080;

app.get('/',(req,res) =>{
    res.json({
        message: 'Task manager Api working fine!'
    })
});

app.listen(PORT,()=>{console.log('Server is running on port ${PORT}')});

app.use(bodyParser.json());