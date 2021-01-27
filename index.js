const app = require("./src/app");
const mongoConnect = require('./src/mongoose');

(async () => {

    try {
        //start mongodb connection
        await mongoConnect();
        app(5000)
    } catch (error) {
        console.log(error)
        console.log('error: app cannot running')
    }

})();