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
 
 
 
const ReceptionistMenu = () => {
   return (
       <div>
           <Accordion defaultActiveKey="0">
               <Accordion.Item eventKey="0">
 
                   <Link className="list-group-item list-group-item-action " tag="a" to="/receptionist">
                       <Button outline className="my-3 mx-4"  style={{width:178, border : 0}} >
 
                           Home
                       </Button>
 
                   </Link>
               </Accordion.Item>
 
 
               <Accordion.Item eventKey="1">
                   <Link className=" list-group-item list-group-item-action" tag="a" to="/receptionist">
 
 
                       <Accordion.Header block outline className="mx-1 text-center dropdown-content"><Button outline style={{width:178, border : 0}}> Manage Guest</Button></Accordion.Header>
 
                       <Accordion.Body style={{ margin: "0", padding: "8" }}>
 
 
 
                           <Link  outline className="list-group-item dropdown-content " tag="a" to="/receptionist/addguest" style={{ border: "0" }}><Button  outline style={{border:0}}> Add Guest</Button></Link>
                           <hr />
 
                           <Link block outline className="list-group-item  dropdown-content" tag="a" to="/receptionist/viewguestbyid" style={{ border: "0" }}><Button  outline style={{border:0}}> View Guest By Id</Button></Link>
                           
 
                           
                       </Accordion.Body>
 
                   </Link>
               </Accordion.Item>
 
               <Accordion.Item eventKey="2">
                   
 
<Link className="list-group-item list-group-item-action " tag="a" to="/receptionist/searchroom">
   <Button outline className="my-3 mx-4 accordion-header" style={{width:178 , border : 0}}   >
 
       Search Rooms
   </Button>
 
</Link>
</Accordion.Item>
               <Accordion.Item eventKey="3">
                   
 
<Link className="list-group-item list-group-item-action " tag="a" to="/receptionist/issuebill">
   <Button outline className="my-3 mx-4 accordion-header" style={{width:178 , border : 0}}   >
 
       Issue Bill
   </Button>
 
</Link>
</Accordion.Item>
 
 
<Container className="text-center my-5" >
       
           <Button  color="danger" className="my-3 col-4">Logout</Button>
       </Container>
           </Accordion>
       </div>
 
   )
}
 
export default ReceptionistMenu;
