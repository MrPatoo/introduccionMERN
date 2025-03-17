/*fields:
Comment
Rating
IdClient
*/

import { Schema, model } from "mongoose";

const reviewSchema = new Schema({
    comment:{
        type:String,
        require: true
    },

    rating:{
        type: Number,
        require: true,
        min:0,
        max:5
    },

    idCliente:{
        //PARA RELACIONES-------------------------------------------------
        type: Schema.Types.ObjectId,
        ref: "Clients",
        require: true 
    } 



}, {
    //tabla auditoria PRO
    timestamps: true,
    strict: false
})

export default model("Review", reviewSchema);