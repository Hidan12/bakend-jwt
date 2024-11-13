import User from "../models/User.js"

export default async (req, res, next)=>{
    try {
        const user = await User.findOne({mail:req.body.mail})
        if (user) {
            return res.status(400).json({
                succes: false,
                message: "The email is already registered."
            })
        }
        return next()
    } catch (error) {
        return next(error)
    }
}