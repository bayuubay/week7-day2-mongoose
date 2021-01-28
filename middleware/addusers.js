module.exports=function addUsers(req,res,next) {
    const allowKeys = ["fullName", "age"];
    const data=Object.keys(req.body)

    try {

        if (!data.length) {
          throw new Error("request data can't be empty")
        } 

        for (let i = 0; i<req.body.length; i++){
            const item = Object.keys(req.body[i]);
            for (let j = 0; j < item.length; j++){
                if (!allowKeys.includes(item[j])) {
                    throw new Error("format request data is not valid")
                }                  
            }
        }
        next();
    } catch (error) {

        res.status(400).json({message:error.message})
    }


}