import User from "../models/User.js";
import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";

export default passport.use(
    new Strategy(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.SECRET
        },
        async (jwt_payload, done) =>{
            
            try {
                let user = await User.findOne({mail:jwt_payload.email, online:true})
                console.log("user", user);
                
                if (user) {
                    return done(null,user)
                }else{
                    return done(null,null)
                }    
            } catch (error) {
                return done(error,null)
            }
        }
        
    )
)