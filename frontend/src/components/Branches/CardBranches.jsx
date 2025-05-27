import React from "react";
import Button from "../Button1";

const CardBranches = ({ branches, deleteBranch, updateBranch }) => {
  if (!branches) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          {branches.name} 
        </h2>
        <p className="text-gray-600">
          <span className="font-semibold">Dirección:</span> {branches.address}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Teléfono:</span> {branches.telephone}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Cronograma:</span> {branches.schedule}
        </p>
       
        <p>id: {branches._id}</p>


        <Button 
        type="button"
        label={"Eliminar"}
        actionButton={() =>{deleteBranch(branches._id), console.log("funciona eliminar", branches._id)} }
        />

                        <Button 
                        type="button"
        label={"Editar Información"}
        actionButton={() =>{updateBranch(branches), console.log("funciona editar")} }
        colorClass={"warning"}
        />


               


      </div>
    </div>
  );
};

export default CardBranches;