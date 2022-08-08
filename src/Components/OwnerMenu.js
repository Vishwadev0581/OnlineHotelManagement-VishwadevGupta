import React from "react";
import { Button, Container, ListGroup, ListGroupItem, Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,} from "reactstrap";

const OwnerMenu=()=>{
    return(
        <div>
            {/* <Dropdown block>
        <DropdownToggle caret>Dropdown</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Select Operation</DropdownItem>
          <DropdownItem>Add Department</DropdownItem>
          <DropdownItem>View Department</DropdownItem>
          <DropdownItem>View All Departments</DropdownItem>
          
        </DropdownMenu>
      </Dropdown> */}




        <ListGroup>
            <ListGroupItem tag="a" href="#!">Home</ListGroupItem>
            <ListGroupItem tag="a" href="#!">Manage Department</ListGroupItem>
            <ListGroupItem tag="a" href="#!">Manage User</ListGroupItem>
            <ListGroupItem tag="a" href="#!">Retrieve Report</ListGroupItem>
        </ListGroup>

        <Container className="text-center my-5" >
            <Button color="danger" >Logout</Button>
        </Container>

        </div>
    )
}

export default OwnerMenu;