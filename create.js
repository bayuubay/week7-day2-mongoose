const mongoose = require('mongoose');

(async () => {
    //connect to mongodb local server
    await mongoose.connect("mongodb://localhost:27017/binaracademy", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    });

    //init mongoose schema
    const Schema = mongoose.Schema;
    // Create Schema Users (migration)
    const Users = new Schema({
        fullName: String,
        age: Number,
    })

    //create model users
    const UsersModel = mongoose.model("users", Users);

    const dataInsert = [{
            fullName: "John Travolta",
            age: 34
        },
        {
            fullName: "John Mayer",
            age: 29
        }
    ]

    //verifikasi data
    const allowKeys = ["fullName", "age"];
    try {
        for (let i = 0; i < dataInsert.length; i++) {
            const requestKeys = Object.keys(dataInsert[i]);
            for (let j = 0; j < requestKeys.length; j++) {
                if (!allowKeys.includes(requestKeys[j])) {
                throw new Error(`data ${requestKeys[j]} tidak sesuai format`)
                }
            }
        }
        await UsersModel.create(dataInsert);
        console.log(`success insert data`);
    } catch (error) {
        console.log(error)
    }
   
})();