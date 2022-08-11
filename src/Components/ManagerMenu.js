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
 
 
 
const ManagerMenu = () => {
   return (
       <div>
           <Accordion defaultActiveKey="0">
               <Accordion.Item eventKey="0">
 
                   <Link className="list-group-item list-group-item-action " tag="a" to="/manager">
                       <Button outline className="my-3 mx-4" style={{ width: 178, border: 0 }} >
 
                           Home
                       </Button>
 
                   </Link>
               </Accordion.Item>
 
 
               <Accordion.Item eventKey="1">
                   <Link className=" list-group-item list-group-item-action" tag="a" to="/manager">
 
 
                       <Accordion.Header block outline className="mx-1 text-center dropdown-content"><Button outline style={{ width: 178, border: 0 }}> Manage Inventory</Button></Accordion.Header>
 
                       <Accordion.Body style={{ margin: "0", padding: "8" }}>
 
 
 
                           <Link outline className="list-group-item dropdown-content " tag="a" to="/manager/addinventory" style={{ border: "0" }}><Button outline style={{ border: 0 }}> Add Inventory</Button></Link>
                           <hr />
 
                           <Link block outline className="list-group-item  dropdown-content" tag="a" to="/manager/viewinventorybyname" style={{ border: "0" }}><Button outline style={{ border: 0 }}> View Inventory By Name</Button></Link>
                           <hr />
 
                           <Link block outline className="list-group-item dropdown-content " tag="a" to="/manager/viewinventory" style={{ border: "0" }}><Button outline style={{ border: 0 }}> View All Inventory</Button></Link>
                       </Accordion.Body>
 
                   </Link>
               </Accordion.Item>
 
               <Accordion.Item eventKey="2">
                   <Link className="list-group-item list-group-item-action" tag="a" to="/manager">
 
 
                       <Accordion.Header block outline className=" mx-1 text-center dropdown-content"> <Button outline style={{ width: 178, border: 0 }}>Manage Staff</Button></Accordion.Header>
 
                       <Accordion.Body style={{ margin: "0", padding: "8" }}>
 
 
 
                           <Link block outline className="list-group-item dropdown-content " tag="a" to="/manager/addstaff" style={{ border: "0" }}><Button outline style={{ border: 0 }}> Add Staff</Button></Link>
                           <hr />
 
                           <Link block outline className="list-group-item  dropdown-content" tag="a" to="/manager/viewstaffbycode" style={{ border: "0" }}><Button outline style={{ border: 0 }}> View Staff By Code</Button></Link>
                           <hr />
 
                           <Link block outline className="list-group-item dropdown-content " tag="a" to="/manager/viewstaff" style={{ border: "0" }}><Button outline style={{ border: 0 }}> View All Staff</Button></Link>
                       </Accordion.Body>
 
                   </Link>
               </Accordion.Item>
 
               <Accordion.Item eventKey="3">
                   <Link className="list-group-item list-group-item-action" tag="a" to="/manager">
 
 
                       <Accordion.Header block outline className=" mx-1 text-center dropdown-content"> <Button outline style={{ width: 178, border: 0 }}>Manage Room</Button></Accordion.Header>
 
                       <Accordion.Body style={{ margin: "0", padding: "8" }}>
 
 
 
                           <Link block outline className="list-group-item dropdown-content " tag="a" to="/manager/addroom" style={{ border: "0" }}><Button outline style={{ border: 0 }}> Add Room</Button></Link>
                           <hr />
 
                           <Link block outline className="list-group-item  dropdown-content" tag="a" to="/manager/viewroombyroomno" style={{ border: "0" }}><Button outline style={{ border: 0 }}> view Room By Room no</Button></Link>
                           <hr />
 
                           <Link block outline className="list-group-item dropdown-content " tag="a" to="/manager/setrates" style={{ border: "0" }}><Button outline style={{ border: 0 }}> Set Room Rates</Button></Link>
                       </Accordion.Body>
 
                   </Link>
 
               </Accordion.Item>
 
 
               <Container className="text-center my-5" >
                   
                   <Button color="danger" className="my-3 col-4">Logout</Button>
               </Container>
           </Accordion>
       </div>
 
   )
}
 
export default ManagerMenu;