import salesModel from "../models/Sales.js";

const salesController={};

//Get
salesController.getSales =async(req, res)=>{
    try {
        const sales = await salesModel.find()
        res.status(200).json(sales)
    } catch (error) {
        console.log("error: " + error)
        res.status(500).json({message: "Internal Server Error"})

    }
}

//Post
salesController.postSales = async(req, res)=>{
    try {
        const{ product, category, customer, total } = req.body;

        //validar el total
        if(total < 0){
            return res.status(400).json({message: "Inserte valores validos"})
        }
        const newSales= new salesModel({ product, category, customer, total })
        await newSales.save()

        res.status(200).json({message: "sale saved"})
    } catch (error) {
        console.log("error: " + error)
        res.status(500).json({message: "Internal Server Error"})
    }
}



///////////////////////////////////////////////////////////////////////////////////////////////////////

//ventas que tiene cada categoria
salesController.getSalesByCategory = async (req, res)=>{
    try {
        
        const resultado = await salesModel.aggregate(
            [
                {
                    $group:{
                        _id: "&category",
                        totalventas: {$sum: "$total"}
                    }
                },
                {//1. menor a mayor, -1. de mayor a menor
                    $sort: {totalventas: -1}
                }
            ]
        )
        res.status(200).json(resultado)
    } catch (error) {
        console.log("error: " + error)
        res.status(500).json({message: "Internal Server Error"})
    }
}

//productos mas vendidos
salesController.getMostSalledProducts = async(req, res)=>{
    try {

        const resultado = await salesModel.aggregate(
            [
                {
                    $group:{
                        _id: "$product",
                        totalventas: {$sum: 1}
                    }
                },
                
                {
                    //ordenar
                    $sort: {totalventas: -1},

                   
                },{
                    //limitar
                    $limit: 3
                }
                 
            ]
        )
        res.status(200).json(resultado)
    } catch (error) {
        console.log("error: " + error)
        res.status(500).json({message: "Internal Server Error"})
    }

}

//ganancias totales
salesController.getTotalEarnings= async(req, res)=>{
    try {
        const resultado = await salesModel.aggregate(
            [
                {
                    $group:{
                        _id: null,
                        gananciasTotales: {$sum: "$total"}
                    }
                }
            ]
            )
            res.status(200).json(resultado)
    } catch (error) {
        console.log("error: " + error)
        res.status(500).json({message: "Internal Server Error"})
    }
}

export default salesController;