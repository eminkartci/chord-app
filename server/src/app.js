
// import
const express = require('express');
const cors = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Create app
const app = express();

// USE
app.use(morgan('combine'))
app.use(bodyParser.json)
//app.use(cors())

// GET
app.get('/status', (req,res) => {
    res.send({
        message: "Hello World!"
    })
} )


// Listen
app.listen(process.env.PORT || 8081)
