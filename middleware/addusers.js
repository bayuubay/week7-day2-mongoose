module.exports=function addUsers(req,res,next) {
    const allowKeys = ["fullName", "age"];
    const data=Object.keys(req.body)
    // const dataInsert = req.body
    try {
        if (!data.length) {
          throw new Error("request data can't be empty")
        } 
        
    } catch (error) {

        res.status(400).json({message:error.message})
    }
    // for (let i = 0; i < dataInsert.length; i++) {
    //     const requestKeys = Object.keys(dataInsert[i]);
    //     for (let j = 0; j < requestKeys.length; j++) {
    //         if (!allowKeys.includes(requestKeys[j])) {
    //         throw new Error(`data ${requestKeys[j]} tidak sesuai format`)
    //         }
    //     }
    // }

}