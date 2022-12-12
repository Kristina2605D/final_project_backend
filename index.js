import express from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';
import config from './config.js';
config()


const app = express();
const jsonparser = bodyParser.json()
app.use (jsonparser);
const PORT = 5000;
app.get('/', (req, res) => {
    res.send('barev')
})
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})