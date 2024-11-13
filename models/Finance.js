import { Schema, model } from "mongoose"

const collection = "Finances"

const schema = new Schema({
    date: {type:Date, required:true},
    description: {type:String, required:true},
    value: {type:Number, required:true},
    active:{type:Boolean, required:true},
    user: {type:Schema.Types.ObjectId, required:true, ref:"Users"}
},{
    timestamps:true
})

const Finance = model(collection, schema)

export default Finance