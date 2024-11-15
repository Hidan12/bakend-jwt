import { model, Schema } from "mongoose";

const collection = "Users"

const schema = new Schema({
    name: {type: String, required: true},
    mail: {type: String, required: true},
    typeUser: {type: Number, default:1},
    address: {type: String, required: true},
    phone: {type: Number, required: true},
    password: {type: String, required: true},
    online: {type: Boolean, required: true}
},{
    timestamps:true
})

const User = model(collection, schema)

export default User