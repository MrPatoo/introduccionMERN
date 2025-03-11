const employeesController = {};

import EmployeesModel from "../models/Employees.js";

//SELECT
employeesController.getEmployees = async (req, res) =>{
    const employees =await EmployeesModel.find()

    res.json(employees)
}

//INSERT
employeesController.postEmployees = async (req, res) =>{
    const { name, lastName, birthday, email, address, hireDate, password, telephone, dui, isssNumber, isVerified}= req.body;
    const newEmployee = new EmployeesModel({name, lastName, birthday, email, address, hireDate, password, telephone, dui, isssNumber, isVerified})
    await newEmployee.save()

    res.json({message: "Employee saved"})
}

//DELETE
employeesController.deleteEmployees = async (req, res) =>{
    await employeesModel.findByIdAndDelete(req.params.id)

    res.json({message: "Product deleted"})
}

//UPDATE
employeesController.putEmployees = async (req, res) =>{
    const {name, lastName, birthday, email, address, hireDate, password, telephone, dui, isssNumber, isVerified} = req.body;
    const updateEmployees = await employeesModel.findByIdAndUpdate(req.params.id, {name, lastName, birthday, email, address, 
        hireDate, password, telephone, dui, isssNumber, isVerified}, {new: true})

        res.json({message: "Employee updated successfully"})

};

export default employeesController
