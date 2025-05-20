import React, { useState, useEffect } from "react";
import toast, {Toaster} from 'react-hot-toast';


const UseDataBranches = () => {

    const ApiBranches="http://localhost:4000/api/branches";
 
    const [activeTab, setActiveTab] = useState("list");
      const [id, setId] = useState("");
      const [name, setName] = useState("");
      const [address, setAddress] = useState("");
      const [telephone, setTelephone] = useState("");
      const [schedule, setSchedule] = useState("");
      const [errorBranch, setError] = useState(null);
      const [success, setSuccess] = useState(null);
      const [loading, setLoading] = useState(false);
      const [branches, setBranches] = useState([]);
    
      const cleanData = () => {
        setName("");
        setAddress("");
        setTelephone("");
        setSchedule("");
        setId("");
      };
    
      //funcion para guardar los datos
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (
          !name ||
          !address ||
          !telephone ||
          !schedule 
        ) {
          setError("Todos los campos son obligatorios");
            toast.error('Todos los campos son obligatorios');
          return;
        }
    
        try {

            //para hacer POST ***********************************
          const newBranch = {
            name,
            address,
            telephone,
            schedule,
          };
    
          console.log(newBranch, "nuevos datos");
    
          const response = await fetch(ApiBranches, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newBranch),
          });
    
          if (!response.ok) {
            throw new Error("Hubo un error al registrar el empleado");
          }
    
          const data = await response.json();
            toast.success('sucursal registrada');
          setBranches(data);
          setSuccess("sucursal registrada correctamente");
          cleanData();
          fetchData();
        } catch (error) {
          setError(error.message); // Capturar cualquier error
          console.error("Error:", error);
          alert("Error", "Ocurrió un error al registrar la sucursal");
            toast.error('Ocurrió un error al registrar la sucursal');
        } finally {
          setLoading(false);
        }
      };
    
      //para el GET*************************
      const fetchData = async () => {
        try {
          const response = await fetch(ApiBranches);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          console.log(data);
          setBranches(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      };
    
      useEffect(() => {
        fetchData();
      }, []);
    


      //para DELETE*******************************************
      const deleteBranch = async (id) => {
        try {
          const response = await fetch(
            `${ApiBranches}/${id}`,
            { 
              method: "DELETE"
            }
          );
    
          if (!response.ok) {
            throw new Error("Failed to delete branch");
          }
    
    toast.success('Sucursal eliminada');
          // Actualizar la lista después de borrar
          //setEmployees((prev) => prev.filter(emp => emp._id !== id));
          fetchData();
        } catch (error) {
          console.error("Error deleting branches sfs:", error);
        }
      };



    
      //para el UPDATE ****************************************************************
      const updateBranch = async (dataBranch) => {
        setId(dataBranch._id);
        setName(dataBranch.name);
        setAddress(dataBranch.address);
        setTelephone(dataBranch.telephone);
        setSchedule(dataBranch.schedule);
        setError(null);
        setSuccess(null);
        setActiveTab("form");
      };
    
      const handleUpdate = async (e) => {
        console.log("update funcional")

        e.preventDefault();
    
        try {
            //producto ya actualizado
          const updatedBranch = {
            name,
            address,
            telephone,
            schedule,
          };
    
          const response = await fetch(
            `${ApiBranches}/${id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updatedBranch),
            }
          );
    
          if (!response.ok) {
            throw new Error("Error al actualizar la sucursal");
          }
    
          toast.success('sucursal actualizada');
          setSuccess("sucursal actualizada correctamente");
          cleanData();
          setId(""); // Limpiar el ID
          setActiveTab("list");
          fetchData(); // Volver a cargar la lista


        } catch (error) {
          setError(error.message);
          alert("Error al actualizar el empleado");
          console.error("Error:", errorBranch);
        } finally {
          setLoading(false);
        }
      };



return {
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
};

  };

export default UseDataBranches;
