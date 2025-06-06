/*fields:
  name
  address
  telephone
  schedule
*/

import { Schema, model } from "mongoose";

const branchesSchema = new Schema({
    name:{
        type: String,
        require: true
    },

    address:{
        type: String,
        require: true
    },

    telephone:{
        type: String,
        require: true
    },

    schedule:{
        type: String,
        require: true
    },
},
{
    //tabla auditoria PRO
    timestamps: true,
    strict: false
})

export default model("Branches", branchesSchema);