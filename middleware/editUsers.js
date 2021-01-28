module.exports = function editUsers(req, res, next) {
    const allowKeys = ["fullName", "age", "id"];
    const data = Object.keys(req.body)

    try {

        if (!data.length) {
            throw new Error("request data can't be empty");
        }
        const item = Object.keys(req.body)
        console.log(item)
        for (let j = 0; j < item.length; j++) {
            if (!allowKeys.includes(item[j])) {
                throw new Error("format request data is not valid");
            }
        }

        next();
    } catch (error) {

        res.status(400).json({ message: error.message });
    }


}