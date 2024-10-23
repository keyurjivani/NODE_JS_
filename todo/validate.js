const isvalid = (req, res, next) => {
    let {username, password, email} = req.body

    if(!email || !password || !username) {
        res.send("Invalid")
    }else{
        next();
    }
};
module.exports = isvalid