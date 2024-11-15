import jwt from "jsonwebtoken"

export default (req, res, next)=>{
    
    const email = req.body.mail 
    const token = jwt.sign(
        {
            email: email
        },
        process.env.SECRET,
        {
            expiresIn: 60*60*24
        }
    )
    req.token = token
    console.log(token);
    
    return next()
}