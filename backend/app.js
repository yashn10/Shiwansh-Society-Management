const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const port = process.env.PORT

require('./db/db');

app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'OPTIONS', 'DELETE', 'PUT', 'PATCH'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
    credentials: true // Enable credentials
}));

app.use(express.json());
app.use(require('./routes/route'));


app.listen(port, () => {
    console.log("server running at port number", port);
})