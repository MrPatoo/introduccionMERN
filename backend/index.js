//importo el archivo app.js
import app from "./app.js"
//importo el archivo de conexion de la BD
import "./database.js"
//importo el archivo config
import { config } from "./src/config.js";

//creo una funcion que ejecuta el servidor
async function main() {
    
    app.listen(config.PORT);
    console.log("server running");
}

//ejecuto la funcion
main();