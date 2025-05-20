import React, { useState, useEffect } from "react";
import RegisterBranches from "../../components/Branches/RegisterBranches";
import ListBranches from "../../components/Branches/ListBranches";
import {Toaster} from 'react-hot-toast';

import UseDataBranches from "../../components/Branches/hooks/useDataBranches";

const Branches = () => {

  /*Efecto para cambiar el título de la página
  cuando se carga la página*/
    useEffect(() => {
    document.title = 'BRANCHES';
  }, []);

  const {
    activeTab,
    setActiveTab,

    //elementos de la tabla////////
    id,
    setId,
    name,
    setName,
    address,
    setAddress,
    telephone,
    setTelephone,
    schedule,
    setSchedule,
   //////////////////////////////

    errorBranch,
    setError,
    success,
    setSuccess,
    loading,
    setLoading,
    branches,
    setBranches,
    cleanData,
    handleSubmit,
    fetchData,
    deleteBranch,
    updateBranch,
    handleUpdate,
  } = UseDataBranches();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Sucursales</h1>
        <div>
          <div className="flex border-b border-gray-200 mb-4">



            <button
              className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:border-b-2 focus:border-blue-500"
              onClick={() => setActiveTab("list")}
            >
              Lista de sucursales
            </button>



            <button
              className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:border-b-2 focus:border-blue-500"
              onClick={() => {
                setActiveTab("form");
                cleanData();
              }}
            >
              Gestionar sucursales
            </button>


          </div>
          <div>
            {activeTab === "list" && (
              <div>
                <ListBranches
                  setId={setId}
                  setActiveTab={setActiveTab}
                  updateBranch={updateBranch}
                  handleUpdate={handleUpdate}
                  deleteBranch={deleteBranch}
                  branches={branches}
                  loading={loading}
                />
              </div>
            )}
            {activeTab === "form" && (
              <div>
                <RegisterBranches
                ///////////////LO QUE ESTA EN LA TABLA/////////////////
                  id={id}
                  setId={setId}
                  name={name}
                  setName={setName}
                  address={address}
                  setAddress={setAddress}
                  telephone={telephone}
                  setTelephone={setTelephone}
                  schedule={schedule}
                  setSchedule={setSchedule}
                  //////////////////////////////////////////////////////
                  
                  errorBranch={errorBranch}
                  setError={setError}
                  success={success}
                  setSuccess={setSuccess}
                  loading={loading}
                  setLoading={setLoading}
                  branches={branches}
                  setBranches={setBranches}
                  cleanData={cleanData}
                  handleSubmit={handleSubmit}
                  handleUpdate={handleUpdate}
                />
              </div>
            )}
          </div>
        </div>
      </div>
         <Toaster
          toastOptions={{
            duration: 1000,
          }}
        />
    </div>
  );
};

export default Branches;
