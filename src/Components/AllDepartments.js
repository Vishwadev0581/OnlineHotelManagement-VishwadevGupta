import React, { useState, useEffect } from "react";
import Department from "./Department";
import base_url from "../api/bootapi";
import axios from "axios";
//import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';
//toast.configure();
const AllDepartments = () => {
 
   useEffect(() => {
       document.title = "All Departments"
   }, []);
 
 
   // function to call server
   const getAllDepartmentsFromServer = () => {
       axios.get(`${base_url}ManageDepartment/viewall`).then(
           (response) => {
               //success
               console.log(response.data);
               //toast("Data Fetched from Backend");
               setDepartments(response.data);
 
           },
           (error) => {
               //for errors
               console.log(error);
               // toast.error("Data can't be Fetched from Backend");
           }
       );
   };
 
 
   useEffect(() => {
       getAllDepartmentsFromServer();
   }, []);
 
   const [departments, setDepartments] = useState([
 
   ]);
 
   return (
       <div>
           <h1>All Department</h1>
           <p>List of Departments is as follows :</p>
           {
               departments.length > 0
                   ? departments.map((item) =>
                       <Department key={item.id} department={item} />)
                   : "No Department Present"
           }
       </div>
   )
}
 
export default AllDepartments;
 
 

