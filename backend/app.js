//CREAR EL SERVIDOR*************************************************************************************
//Importo la libreria.
import express from "express";
import ProductsRoutes from "./src/routes/products.js"
import EmployeesRoutes from "./src/routes/employees.js"
import ClientsRoutes from "./src/routes/clients.js"

//Creo una constante que es igual a la libreria que acabo de crear, y la ejecuto.
const app = express();

app.use(express.json());

app.use("/api/products", ProductsRoutes); 
app.use("/api/employee", EmployeesRoutes);
app.use("/api/clients", ClientsRoutes);

//Exporto la constante para usar express en todos lados.
export default app;

//en package.json poner"   "type": "module",   " 