import React from "react";
import Button from "../Button";
//
const RegisterProducts = ({
  id,
  name,
  setName,
  description,
  setDescription,
  price,
  setPrice,
  stock,
  setStock,

  handleSubmit,
  handleUpdate,
}) => {
  return (
    <>
      <form className="max-w-lg mx-auto p-4 bg-white shadow-md rounded mb-5">
        <h1 className="text-2xl hidden">Id a modificar {id}</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="tambo"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="lastName"
            >
              Description
            </label>
            <input
              type="text"
              name="lastName"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="tambo de gas grande"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
                Price
            </label>
            <input
              type="number"
              id="email"
              name="email"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="$20"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              stock
            </label>
            <input
              type="number"
              id="password"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              name="password"
              className="w-full px-3 py-2 border rounded"
              placeholder="100"
            />
          </div>
          

        {id ? (
            <Button 
            type="submit"
            label={"editar info"}
            actionButton={(e) => {
              handleUpdate(e); console.log("funciona")
              }}/>
         
        ) : (
          <Button
          type="submit"
          label={"registrar"}
          actionButton={(e) => {
            handleSubmit(e); console.log("funciona")
            alert("algo")
          }}/>
        )}
        </div>
      </form>
    </>
  );
};

export default RegisterProducts;