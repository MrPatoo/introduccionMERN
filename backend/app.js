//CREAR EL SERVIDOR*************************************************************************************
//Importo la libreria.
import express from "express";


//Creo una constante que es igual a la libreria que acabo de crear, y la ejecuto.
const app = express();

//Exporto la constante para usar express en todos lados.
export default app;


//en package.json poner"   "type": "module",   " para que funcione bien