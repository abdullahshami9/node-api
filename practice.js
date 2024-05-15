const express = require("express");
const os = require("os");

var app = express();//make application isntance
const port = 798;

app.get("/", (req,res) => {
    let hostname = os.hostname(0);
    res.send(`hostname is ${hostname}`);
});

app.listen(port, () =>{
    console.log(`Application is runing on port: ${port}`);
});