module.exports = function deleteUsers(req, res, next) {

    try {

        if (!req.query.id) {
            throw new Error("id can't be empty");
        }
        next();
    } catch (error) {

        res.status(400).json({ message: error.message });
    }


}