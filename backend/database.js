//importar la libreria mongoose
import mongoose from "mongoose";
//importo el archivo config con todas las variables
import { config } from "./src/config";

//conectar la base de datos
mongoose.connect(config.MONGO_URI);





//comprobar que todo funcione---------------------------------------------------------------
//creo una const que es igual a la conexion

//conectada
const connection = mongoose.connection;
connection.once("open", ()=> {
    console.log("DB is connected");
});
//desconectada
connection.on("disconnected", ()=>{
    console.log("DB is disconnected");
});
//error
connection.on("error", (error)=>{
    console.log("error found: " + error);
});
