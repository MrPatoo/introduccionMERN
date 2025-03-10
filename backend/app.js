//CREAR EL SERVIDOR*************************************************************************************
//Importo la libreria.
import express from "express";
import ProductsRoutes from "./src/routes/products.js"

//Creo una constante que es igual a la libreria que acabo de crear, y la ejecuto.
const app = express();

app.use(express.json());

app.use("/api/products", ProductsRoutes); 

//Exporto la constante para usar express en todos lados.
export default app;

//en package.json poner"   "type": "module",   " 