import jwt from "jsonwebtoken"

export default (req, res, next)=>{
    const token = jwt.sign(
        {
            email: req.userDB.email, 
            _id: req.userDB._id
        },
        process.env.SECRET,
        {
            expiresIn: 60*60*24
        }
    )
    req.token = token
    return next()
}