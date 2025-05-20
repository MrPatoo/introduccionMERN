import React from "react";
import Button from "../Button";

const CardProducts = ({ product, deleteProduct, updateProduct }) => {
  if (!product) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          {product.name} 
        </h2>
        <p className="text-gray-600">
          <span className="font-semibold">Description:</span> {product.description}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Price:</span> {product.price}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Stock:</span> {product.stock}
        </p>
       
        <p>id: {product._id}</p>


        <Button 
        type="button"
        label={"Eliminar"}
        actionButton={() =>{deleteProduct(product._id), console.log("funciona")} }
        />

                        <Button 
                        type="button"
        label={"Editar Información"}
        actionButton={() =>{updateProduct(product);console.log("funciona")} }
        colorClass={"warning"}
        />


               


      </div>
    </div>
  );
};

export default CardProducts;