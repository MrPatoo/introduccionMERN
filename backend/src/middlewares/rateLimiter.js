import rateLimit from "express-rate-limit"

//1- configuramos la libreria.
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, //15 minutos
    max:  600,                //cantidad de solicitudes permitidas
    message: {
        status: 429,
        error: "Too many request"
    }
})

export default limiter;