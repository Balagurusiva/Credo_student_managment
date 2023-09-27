import express  from "express";

const app = express()

app.use('/', (req,res) => {
    res.send("<p>hello</p>")
})

app.listen(5000, console.log("listening at 5000"))