import React from "react";
import { Link } from "react-router-dom";
import {
   Button, Container, ListGroup, ListGroupItem, Dropdown,
   DropdownToggle,
   DropdownMenu,
   DropdownItem,
   UncontrolledDropdown,
   AccordionHeader
} from "reactstrap";
 
 
 
import Accordion from "react-bootstrap/Accordion";
import { AccordionButton } from "react-bootstrap";
 
 
 
const OwnerMenu = () => {
   return (
       <div>
           <Accordion defaultActiveKey="0">
               <Accordion.Item eventKey="0">
 
                   <Link className="list-group-item list-group-item-action " tag="a" to="/owner">
                       <Button outline="true" className="my-3 mx-4"  style={{width:178, border : 0}} >
 
                           Home
                       </Button>
 
                   </Link>
               </Accordion.Item>
 
 
               <Accordion.Item eventKey="1">
                   <Link className=" list-group-item list-group-item-action" tag="a" to="/owner">
 
 
                       <Accordion.Header block="true" outline="true" className="mx-1 text-center dropdown-content"><Button outline style={{width:178, border : 0}}> Manage Department</Button></Accordion.Header>
 
                       <Accordion.Body style={{ margin: "0", padding: "8" }}>
 
 
 
                           <Link  outline="true" className="list-group-item dropdown-content " tag="a" to="/owner/adddepartment" style={{ border: "0" }}><Button  outline style={{border:0}}> Add Department</Button></Link>
                           <hr />
 
                           <Link block="true" outline="true" className="list-group-item  dropdown-content" tag="a" to="/owner/viewdepartmentbyid" style={{ border: "0" }}><Button  outline style={{border:0}}> View Department By Id</Button></Link>
                           <hr />
 
                           <Link block="true" outline="true" className="list-group-item dropdown-content " tag="a" to="/owner/viewall" style={{ border: "0" }}><Button  outline style={{border:0}}> View All Department</Button></Link>
                       </Accordion.Body>
 
                   </Link>
               </Accordion.Item>
 
               <Accordion.Item eventKey="2">
                   <Link className="list-group-item list-group-item-action" tag="a" to="/owner">
 
 
                       <Accordion.Header block="true" outline="true" className=" mx-1 text-center dropdown-content"> <Button  outline style={{width:178, border : 0}}>Manage User</Button></Accordion.Header>
 
                       <Accordion.Body style={{ margin: "0", padding: "8" }}>
 
 
 
                           <Link block="true" outline="true" className="list-group-item dropdown-content " tag="a" to="/owner/adduser" style={{ border: "0" }}><Button  outline style={{border:0}}> Add User</Button></Link>
                           <hr />
 
                           <Link block="true" outline="true" className="list-group-item  dropdown-content" tag="a" to="/owner/updateuser" style={{ border: "0" }}><Button  outline style={{border:0}}> Update User</Button></Link>
                           <hr />
 
                           <Link block="true" outline="true" className="list-group-item dropdown-content " tag="a" to="/owner/deleteuser" style={{ border: "0" }}><Button  outline style={{border:0}}> Delete User</Button></Link>
                       </Accordion.Body>
 
                   </Link>
               </Accordion.Item>
 
               <Accordion.Item eventKey="3">
 
<Link className="list-group-item list-group-item-action " tag="a" to="/owner/retrievereport">
   <Button outline="true" className="my-3 mx-4 accordion-header" style={{width:178 , border : 0}}   >
 
       Retrieve Report
   </Button>
 
</Link>
</Accordion.Item>
 
 
<Container className="text-center my-5" >
       <Link className="button" tag="a" to="/owner/notifications">
           <Button  className="col-4" style={{color: "white" , backgroundColor: "#330033"}}>Notifications</Button><br></br>
           </Link>
           <Button  color="danger" className="my-3 col-4">Logout</Button>
       </Container>
           </Accordion>
       </div>
 
   )
}
 
export default OwnerMenu;
