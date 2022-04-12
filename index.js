import express  from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import router from './router.js';


dotenv.config()
const app = express()
const port = process.env.PORT || 3500

app.use(express.urlencoded({ extended : true}))
app.use(bodyParser.json())
app.use(cors()) 
app.use('/', router)


app.listen(port, () => {
    console.log(`server is running in port ${port}`)
})