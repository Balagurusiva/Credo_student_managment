import express from "express";
import { PORT, mongoDBURL } from './config.js'
import mongoose from "mongoose";

const app = express()

app.use('/', (req, res) => {
    res.send("<p>hello</p>")
})


mongoose
    .connect(mongoDBURL)
    .then(() => {
        app.listen(PORT, console.log("listening at 5000"))
    })
    .catch((error)=>{
       console.log(error)
    })
