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
import loginRouters from "./src/routes/login.js"
import logoutRouters from "./src/routes/logout.js"
import registerClients from "./src/routes/registerClients.js"
import passwordRecoveryRoutes from "./src/routes/passwordRecovery.js";
import blog from "./src/routes/blog.js";
import { validateAuthToken } from "./src/middlewares/validateAuthToken.js";
import cors from "cors"
import faqsRoutes from "./src/routes/faqs.js";
import salesRoutes from "./src/routes/sales.js"

 


//Creo una constante que es igual a la libreria que acabo de crear, y la ejecuto.
const app = express();



app.use(
    cors({
        origin: "https://zgas-cgmx.onrender.com", //lo pueden manipular
        credentials: true,
    })
)
   
app.use(express.json());

//para usar las cookies
app.use (cookieParser());

//SE QUITO LA SEGURIDAD DEL LOS ROLES
//validateAuthToken es para validar el tipo de usuarios que pueden usar esa ruta.
app.use("/api/products", ProductsRoutes); 
app.use("/api/employee", EmployeesRoutes);
app.use("/api/clients", ClientsRoutes);
app.use("/api/branches", BranchesRoutes);
app.use("/api/reviews", ReviewsRouters);
app.use("/api/registerEmployees", registerEmployees);
app.use("/api/login", loginRouters);
app.use("/api/logout", logoutRouters);
app.use("/api/registerClients", registerClients);
app.use("/api/passwordRecovery", passwordRecoveryRoutes);
app.use("/api/blog", blog);
app.use("/api/faqs", faqsRoutes);
app.use("/api/sales", salesRoutes);


//Exporto la constante para usar express en todos lados.
export default app;

//en package.json poner"   "type": "module",   " 