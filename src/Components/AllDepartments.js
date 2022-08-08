
import React, { useState } from "react";
import Department from "./Department";

const AllDepartments=()=>{
    
    const [departments, setDepartments] = useState([
        {name:"Kitchen", size: 25, hodName :"Kiran",hodPhoneNo:"9876543210"},
        {name:"Security", size: 8, hodName :"Bablu",hodPhoneNo:"9876543210"},
        {name:"Hospitality", size: 15, hodName :"Rajesh",hodPhoneNo:"9876543210"}

    ]);
    
    return(
        <div>
            <h1>All Department</h1>
            <p>List of Departments is as follows :</p>
            {
                departments.length>0 ? 
                departments.map((item)=>
                    <Department department={item} />)
                    : "No Department Present"
            }
        </div>
    )
}

export default AllDepartments;