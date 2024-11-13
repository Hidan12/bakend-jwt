import { Schema, model } from "mongoose";

const collection = "properties"

const schema = new Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
    price: {type: Number, required:true},
    user: {type: Schema.Types.ObjectId, required: true, ref:"Users"}
},{
    timestamps:true
})


const Property = model(collection, schema)

export default Property