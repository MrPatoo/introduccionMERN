import React from "react";
import CardBranches from "./CardBranches";
const ListBranches = ({
    deleteBranch,
  updateBranch,
  loading,
  branches,
}) => {
  return (
    <>
      <h1 className="text-2xl font-bold underline text-center">
        Listado de Sucursales
      </h1>
      <div className="flex flex-wrap gap-4 justify-center mt-5">

        {loading && <div className="text-center text-gray-500">Loading...</div>}

        {branches?.map((branches) => (
          <CardBranches
            key={branches._id}
            branches={branches}
            deleteBranch={deleteBranch}
            updateBranch={updateBranch}
          />
        ))}
      </div>
    </>
  );
};

export default ListBranches;