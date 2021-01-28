const router = require('express').Router();
const usersModel = require('../models/users')()

const middlewareAddUsers = require('../middleware/addusers');
const deleteUsers = require('../middleware/deleteUsers');
const editUsers = require('../middleware/editUsers');

module.exports=function routes() {
    router.get('/users', async (req, res) => {
        try {
            const data = await usersModel.find({});
            res.json({ message: "success read data users", data: data });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "error read data user" });
        }        
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

    router.put('/users',editUsers, async (req, res) => {

        try {
            const id = req.body.id
            const name = req.body.fullName
            const age = req.body.age
            await usersModel.updateOne({ _id: id }, { fullName: name, age: age });
            res.json({message:"success update data users"})
        } catch (error) {
            console.log(error)
            res.status(500).json({message:"error when update data users"})            
        }        
    });

    router.delete('/users',deleteUsers, async (req, res) => {
        try {

            await usersModel.findByIdAndDelete({ _id: req.query.id })
            res.json({message:`success delete data users with id ${req.query.id}`})
        } catch (error) {
            console.log(error)
            res.status(500).json({message:"error when delete data users"})      
        }       
    });   
    
    return router
}
