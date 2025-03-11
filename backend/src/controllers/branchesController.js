const branchesController ={};

import branchesModel from "../models/Branches.js";

//SELECT
branchesController.getBranches = async(req, res)=>{
    const branches = await branchesModel.find();
     
    res.json(branches)
}

//INSERT
branchesController.postBranches = async(req, res)=>{
    const {name, address, telephone, schedule} = req.body;
    const newBranch = new branchesModel({name, address, telephone, schedule})
    await newBranch.save()

    res.json({message: "branch saved"})
}

//DELETE
branchesController.deleteBranches =async(req, res) =>{
    await branchesModel.findByIdAndDelete(req.param.id)

    res.json({message: "Branche deleted"})
}

//UPDATE
branchesController.putBranches = async(req, res) =>{
    const{name, address, telephone, schedule}=req.body
    const updateBranches = await branchesModel.findByIdAndUpdate(req.params.id, {name, address, telephone, schedule}, {new: true})

    res.json({message: "Branch updated successfully"})
}

export default branchesController;