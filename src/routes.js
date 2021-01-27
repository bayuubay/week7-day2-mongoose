const router = require('express').Router();
const usersModel = require('../models/users')()

const middlewareAddUsers = require('../middleware/addusers');

module.exports=function routes() {
    router.get('/users', async (req, res) => {
        const data = await usersModel.find({});
        res.send(data);
    });

    router.post('/users',middlewareAddUsers, async (req, res) => {

        try {           
            await usersModel.create(req.body);
            res.json({ message: "success create new data users" });
        } catch (error) {
            console.log(error)
            res.status(500).json({message:"error when create data users"})
        }
    });

    router.put('/users', async (req, res) => {

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

    router.delete('/users', async (req, res) => {
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
