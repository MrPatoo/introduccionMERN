const clientsController = {};

import clientsModel from "../models/Clients.js";

//SELECT
clientsController.getClients = async(req, res) =>{
    const clients = await clientsModel.find();

    res.json(clients)
}

//INSERT
clientsController.postClients = async(req, res) =>{
    const{name, lastName, birthday, email, password, telephone, dui, isVerified } = req.body;
    const newClient = new clientsModel({name, lastName, birthday, email, password, telephone, dui, isVerified})
    await newClient.save()

    res.json({message: "Client saved"})
}

//DELETE
clientsController.deleteClients = async(req,res) =>{
    await clientsModel.findByIdAndDelete(req.params.id)

    res.json({message: "Client deleted"})
}

//UPDATE
clientsController.putClients = async(req, res)=>{
    const{name, lastName, birthday, email, password, telephone, dui, isVerified } = req.body;
    const updateClients = await clientsModel.findByIdAndUpdate(req.params.id, {name, lastName, birthday, email, password, telephone, dui, isVerified}, {new: true})

    res.json({message: "Client updated successfully"})
}

export default clientsController;