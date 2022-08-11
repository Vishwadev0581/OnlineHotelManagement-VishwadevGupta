import React from "react";
import { Button, Container, Form, FormGroup, Input} from "reactstrap";

const AddInventory=()=>{
    return(
        <div>
            
            <h1 className="text-center my-3">Fill Inventory Details</h1>
            <Form>
                <FormGroup>
                    <label for="inventoryId">Inventory Id</label>
                    <Input 
                    type="number" 
                    placeholder="Enter Id here" 
                    name="inventoryId" 
                    id="inventoryId" 
                    
                    />
                </FormGroup>
                <FormGroup>
                    <label for="itemName">Item Name </label>
                    <Input 
                    type="text" 
                    placeholder="Enter Name here" 
                    name="itemName" 
                    id="itemName" />
                </FormGroup>
                <FormGroup>
                    <label for="itemQuantity">Quantity </label>
                    <Input 
                    type="number" 
                    placeholder="Enter Size here" 
                    name="itemQuantity" 
                    id="itemQuantity" />
                </FormGroup>
                
                <Container className="text-center">
                    <Button color="success">Submit</Button>
                    <Button color="dark " style={{margin:8}}>clear</Button>
                </Container>
            </Form>

        </div>

    )
}

export default AddInventory;