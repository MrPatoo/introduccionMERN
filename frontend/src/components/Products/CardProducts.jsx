import React from "react";

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



<button
actionButton={()=> deleteProduct(product._id)}>
    Eliminar
</button>

<button
actionButton={()=> updateProduct(product._id)}>
    Editar
</button>
                    


      </div>
    </div>
  );
};

export default CardProducts;