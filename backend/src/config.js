import dotenv from "dotenv";

dotenv.config();

//Información dentro de .env
export const config= {
    db:{
        URI: process.env.MONGO_URI
    },

    server:{
        port: process.env.PORT
    },

    JWT:{
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES
    }
}
