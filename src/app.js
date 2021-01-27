const express = require('express');
const bodyParser = require('body-parser');
const routes = require("./routes")


module.exports = function mainApp(ports) {

    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(routes());
    app.set('view engine', 'ejs');
    app.listen(ports,()=>console.log(`this app run on http://localhost:${ports}`))
};
