const express = require('express')
const app = express();

app.get('/', function (req, res) {

    res.send("Hello subrahmanyam")
})

app.get('/myDetails', function (req, res) {

    var obj = {
        name: req.query.name,
        age: 24
    }

    res.send(obj);
})

app.get('/car/:name', function (req, res) {

    var obj = {
        name: req.params.name,
        age: 24
    }

    res.send(obj);
})



app.listen(9000, function () {

    console.log("Running....");
});
