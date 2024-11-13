import User from "../../models/User.js"

const sigIn = async (req, res, next) => {
    try {
        const updateOnline = await User.updateOne(
            {_id: req.userDB._id},
            {online: true}
        )
        return res.status(200).json({
            succes: true,
            user: {
                name: req.userDB.name,
                mail: req.userDB.mail
            },
            token: req.token
        })
        
    } catch (error) {
        next(error)
    }
}

export default sigIn