const router = require('express').Router();
const usersModel = require('../models/users')()

module.exports=function routes() {
    router.get('/users', async (req, res) => {
        const data = await usersModel.find({})
        res.render('create')
    });

    router.post('/users/create', async (req, res) => {

        //create middleware to verify input data
        // const allowKeys = ["fullName", "age"];
        // const dataInsert=[req.body["fullName"],req.body["age"]]
        try {
            // for (let i = 0; i < dataInsert.length; i++) {
            //     const requestKeys = Object.keys(dataInsert[i]);
            //     for (let j = 0; j < requestKeys.length; j++) {
            //         if (!allowKeys.includes(requestKeys[j])) {
            //         throw new Error(`data ${requestKeys[j]} tidak sesuai format`)
            //         }
            //     }
            // }
            await usersModel.create(req.body[req.body["fullName"],req.body["age"]]);
            res.json({ message: "success create new data users" });
        } catch (error) {
            console.log(error)
            res.status(500).json({message:"error when create data users"})
        }
    });

    router.put('/users/updates', async (req, res) => {

        try {
            const id = req.body["_id"];
            const name = req.body["fullName"];
            const age = req.body["age"];
            await usersModel.updateOne({ _id: id }, { fullName: name, age: age });
            res.json({message:"success update data users"})
        } catch (error) {
            console.log(error)
            res.status(500).json({message:"error when update data users"})            
        }        
    });

    router.delete('/users/delete', async (req, res) => {
        try {
            const name=req.body["_id"]
            await usersModel.findByIdAndDelete({ _id: name })
            res.json({message:"success delete data users"})
        } catch (error) {
            console.log(error)
            res.status(500).json({message:"error when delete data users"})      
        }       
    });   
    
    return router
}
