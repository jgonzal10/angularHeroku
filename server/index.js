const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./routes')
const dotenv = require('dotenv');
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) =>
    {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next()
    }
    )
app.use(express.static(__dirname + '/dist/stars'));

if (process.env.NODE_ENV === 'production') {
    console.log('prod')
    app.use(express.static(path.join(__dirname, '/stars/dist/index.html')));
}

app.use('/api', routes)

const port = process.env.PORT || 3000;

app.listen(port, ()=> 
console.log(`Movie Web App port is ${process.env.PORT}`))