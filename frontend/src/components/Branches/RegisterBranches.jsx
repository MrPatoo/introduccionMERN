import React from "react";
import Button from "../Button1";

const RegisterBranches = ({
  id,
  name,
  setName,
  address,
  setAddress,
  telephone,
  setTelephone,
  schedule,
  setSchedule,

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
            />
          </div>



          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="lastName"
            >
              Address
            </label>
            <input
              type="text"
              name="lastName"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-3 py-2 border rounded"
            />
          </div>




          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
                Telephone
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              className="w-full px-3 py-2 border rounded"
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
              type="text"
              id="password"
              value={schedule}
              onChange={(e) => setSchedule(e.target.value)}
              name="password"
              className="w-full px-3 py-2 border rounded"
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

export default RegisterBranches;