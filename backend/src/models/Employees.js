/*fields:
  name
  lastName
  birthday
  email
  address
  hireDate
  password
  telephone
  dui
  isssNumber
  isVerified
*/

import { Schema, model } from "mongoose";

const employeesSchema = new Schema({
    name:{
        type: String,
        require: true
    },

    lastName:{
        type: String,
        require: true
    },

    birthday:{
        type: Date,
        require: true,
        max:[new Date(), "No puede ser una fecha futura"]
    },

    email:{
        type: String,
        require: true,
        unique: true,
        match:[
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,6}$/,
            "Por favor ingrese un correo electronico valido", //validar el correo electronico
        ],
    },

    address:{
        type: String,
        require: true,
    },

    hireDate:{
        type: Date,
        require: true,
        max:[new Date(), "No puede ser una fecha futura"] //validar que no pueda poner una fecha en el futuro
    },

    password:{
        type: String,
        require: true,
        minlenght: 6 //para poner un minimo de caracteres
    },

    telephone:{
        type: String,
        require: true,
        unique: true,
        match: [/^[0-9]{8}$/, "el numero de teléfono tiene que ser válido"] //validar número de teléfono
    },

    dui:{
        type: String,
        require: true,
        unique: true
        //match: [/^\d{8}-\d$/, "número de dui no válido"] //validar dui
    },

    isssNumber:{
        type: String,
        unique: true,
        require: true
    },

    isVerified:{
        type: Boolean,
        require: true
    }
},
{
    //tabla auditoria PRO
    timestamps: true,
    strict: false
})

export default model("Employees", employeesSchema);