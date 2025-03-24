//CREAR EL SERVIDOR*************************************************************************************
//Importo la libreria.
import express from "express";
import ProductsRoutes from "./src/routes/products.js"
import EmployeesRoutes from "./src/routes/employees.js"
import ClientsRoutes from "./src/routes/clients.js"
import BranchesRoutes from "./src/routes/branches.js";
import ReviewsRouters from "./src/routes/reviews.js";
import registerEmployees from "./src/routes/registerEmployees.js";
import cookieParser from "cookie-parser";

//Creo una constante que es igual a la libreria que acabo de crear, y la ejecuto.
const app = express();

app.use(express.json());

//para usar las cookies
app.use (cookieParser());

app.use("/api/products", ProductsRoutes); 
app.use("/api/employee", EmployeesRoutes);
app.use("/api/clients", ClientsRoutes);
app.use("/api/branches", BranchesRoutes);
app.use("/api/reviews", ReviewsRouters);
app.use("/api/registerEmployees", registerEmployees);

//Exporto la constante para usar express en todos lados.
export default app;

//en package.json poner"   "type": "module",   " 