const express = require('express')
const app = express()
app.use(express.json());

app.get('/', function (req, res, next) {

    console.log("hello from middle ware 1");
    req.query.name = "harshita";
    next();

},
    function (req, res, next) {

        console.log('hello from middle ware 2');
        req.query.name = "shaily"
        next();
    },
    function (req, res) {
        let n = req.query.name;
        res.send(`hello ${n}`)
    })
    let port = 4000;
app.listen(port, function () {

    console.log(`the server is running in port ${port}`);
})