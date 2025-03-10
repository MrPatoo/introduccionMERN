/*fields:
name
description 
price
stock
*/

//se importan solo estos archivos
import { Schema, model } from "mongoose";   

const productsSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    description:{
        type: String,
    },
    price:{
        type: Number,
        require: true,
        min: 0
    },
    stock:{
        type: Number,
        require: true,
        min:0
    }
}, {
    //tabla auditoria PRO
    timestamps: true,
    strict: false
})


export default model("Products", productsSchema);

