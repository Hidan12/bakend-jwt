import User from "../models/User.js"


export default async (req, res, next)=>{
    try {
        const account = await User.findOne({mail: req.body.mail})
        if (account) {
            req.userDB = {
                _id: account._id,
                password: account.password,
                mail: account.mail,
                name: account.name,
                typeUser: account.typeUser
            }
            return next()
        }
        return res.status(400).json({
            succes: false,
            message: "User does not exits"
        })
    } catch (error) {
        next(error)
    }
}