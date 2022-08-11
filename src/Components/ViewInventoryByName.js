import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input} from "reactstrap";

const ViewInventoryByName=()=>{
    return(
        <div>
            <h2 className="text-center my-3">View Inventory By Name</h2>
            <Form>
                <FormGroup>
                    <label  className="my-2" for="itemName">Enter Inventory Name</label>
                    <Input 
                    type="text" 
                    placeholder="Enter Name here" 
                    name="itemName" 
                    id="itemName" 
                    //style={{width: 400}}
                    />

                </FormGroup>
                </Form>
                <Container className="text-center">
                    <Button  color="success">
                    <Link className="list-group-item list-group-item-action" tag="a" to="/manager/viewinventorybyname/result">Search</Link>
                    </Button>
                </Container>
        </div>
    )
}
export default ViewInventoryByName;