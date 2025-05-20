import React, { useState, useEffect } from "react";
import toast, {Toaster} from 'react-hot-toast';


const useDataProducts = () => {

    const ApiProducts="http://localhost:4000/api/products";
 
    const [activeTab, setActiveTab] = useState("list");
      const [id, setId] = useState("");
      const [name, setName] = useState("");
      const [description, setDescription] = useState("");
      const [price, setPrice] = useState("");
      const [stock, setStock] = useState("");
      const [errorEmpleado, setError] = useState(null);
      const [success, setSuccess] = useState(null);
      const [loading, setLoading] = useState(false);
      const [products, setProducts] = useState([]);
    
      const cleanData = () => {
        setName("");
        setDescription("");
        setPrice("");
        setStock("");
        setId("");
      };
    
      //funcion para guardar los datos del usuario
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (
          !name ||
          !description ||
          !price ||
          !stock 
        ) {
          setError("Todos los campos son obligatorios");
            toast.error('Todos los campos son obligatorios');
          return;
        }
    
        try {

            //para hacer POST ***********************************
          const newProduct = {
            name,
            description,
            price,
            stock,
          };
    
          console.log(newProduct, "datos nuevo producto");
    
          const response = await fetch(ApiProducts, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
          });
    
          if (!response.ok) {
            throw new Error("Hubo un error al registrar el empleado");
          }
    
          const data = await response.json();
            toast.success('Producto registrado');
          setEmployees(data);
          setSuccess("Producto registrado correctamente");
          cleanData();
          fetchData();
        } catch (error) {
          setError(error.message); // Capturar cualquier error
          console.error("Error:", error);
          alert("Error", "Ocurrió un error al registrar el producto");
            toast.error('Ocurrió un error al registrar el producto');
        } finally {
          setLoading(false);
        }
      };
    
      //funcion para obtener los datos de los empleados
      const fetchData = async () => {
        try {
          const response = await fetch(ApiProducts);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          console.log(data);
          setEmployees(data);
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
      const deleteProduct = async (id) => {
        try {
          const response = await fetch(
            `${ApiProducts}/${id}`,
            {
              method: "DELETE",
              body: JSON.stringify(deleteEmployee),
            }
          );
    
          if (!response.ok) {
            throw new Error("Failed to delete employee");
          }
    
          const result = await response.json();
          console.log("Deleted:", result);
    toast.success('Empleado eliminado');
          // Actualizar la lista después de borrar
          //setEmployees((prev) => prev.filter(emp => emp._id !== id));
          fetchData();
        } catch (error) {
          console.error("Error deleting employee sfs:", error);
        }
      };
    
      const updateEmployee = async (dataEmployee) => {
        setId(dataEmployee._id);
        setName(dataEmployee.name);
        setLastName(dataEmployee.lastName);
        setEmail(dataEmployee.email);
        setTelephone(dataEmployee.telephone);
        setDui(dataEmployee.dui);
        setAddress(dataEmployee.address);
        setBirthdate(dataEmployee.birthdate);
        setHireDate(dataEmployee.hireDate);
        setIsssNumber(dataEmployee.isssNumber);
        setError(null);
        setSuccess(null);
        setActiveTab("form");
      };
    
      const handleUpdate = async (e) => {
        e.preventDefault();
    
        try {
          const updatedEmployee = {
            name,
            lastName,
            email,
            password,
            telephone,
            dui,
            address,
            birthdate,
            hireDate,
            isssNumber,
          };
    
          const response = await fetch(
            `${ApiEmployees}/${id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updatedEmployee),
            }
          );
    
          if (!response.ok) {
            throw new Error("Error al actualizar el empleado");
          }
    
          toast.success('Empleado actualizado');
          setSuccess("Empleado actualizado correctamente");
          cleanData();
          setId(""); // Limpiar el ID
          setActiveTab("list");
          fetchData(); // Volver a cargar la lista
        } catch (error) {
          setError(error.message);
          alert("Error al actualizar el empleado");
          console.error("Error:", errorEmpleado);
        } finally {
          setLoading(false);
        }
      };



return {
    activeTab,
    setActiveTab,
    id,
    setId,
    name,
    setName,
    lastName,
    setLastName,
    email,
    setEmail,
    password,
    setPassword,
    telephone,
    setTelephone,
    dui,
    setDui,
    address,
    setAddress,
    birthdate,
    setBirthdate,
    hireDate,
    setHireDate,
    isssNumber,
    setIsssNumber,
    errorEmpleado,
    setError,
    success,
    setSuccess,
    loading,
    setLoading,
    employees,
    setEmployees,
    cleanData,
    handleSubmit,
    fetchData,
    deleteEmployee,
    updateEmployee,
    handleUpdate,
};

  };


export default useDataProducts;
