const express_pckg = require("express");
const os = require("os");

var app = express_pckg();//dev call this line as instance we just refer it the upper variable
const port = 789;

app.get("/", (req,res) => {
    let hostname = os.hostname()
    res.send(`Hey ! I'm host ${hostname}`);
});

app.listen(port, () => {
    console.log(`Application is running at Port: ${port}`);
});