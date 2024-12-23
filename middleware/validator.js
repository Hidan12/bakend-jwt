const validator = (schema) => [
    (req, res, next)=> {
        const validation = schema.validate(req.body, {abortEarly:false})
        console.log(req.body);
        
        if (validation.error) {
            console.log(validation.error);
            
            return res.status(400).json({
                succes: false,
                message: validation.error.details.map(error => ({ [error.path[0]]: error.message}))
            })
        }
        return next()
    }
 ]

export default validator