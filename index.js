import express from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';
import config from './config.js';
config()
import cors from 'cors';
import furnitureRoute from './routes/furnitureRoute.js';
import contactRoute from './routes/contactRoute.js' ;


const app = express();
const jsonparser = bodyParser.json()
app.use(jsonparser);
const PORT = 5000;
app.use(cors())
app.use('/furniture', furnitureRoute)
app.use('/message',contactRoute)
app.get('/', (req, res) => {
    res.send('barev')
})
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})