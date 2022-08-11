import React from "react";
import { Button, Container, Form, FormGroup, Input} from "reactstrap";

const AddRoom=()=>{
    return(
<div>
            
            <h1 className="text-center my-3">Fill Room Details</h1>
            <Form>
                <FormGroup>
                    <label for="roomno">Room No</label>
                    <Input 
                    type="number" 
                    placeholder="Enter number here" 
                    name="roomno" 
                    id="roomno" 
                    
                    />
                </FormGroup>
                <FormGroup>
                    <label for="type">Room Type-(Standard/Luxury) </label>
                    <Input 
                    type="text" 
                    placeholder="Enter type here" 
                    name="type" 
                    id="type" />
                </FormGroup>
                <FormGroup>
                    <label for="capacity">Capacity </label>
                    <Input 
                    type="text" 
                    placeholder ="Enter capacity here" 
                    name="capacity" 
                    id="capacity" />
                </FormGroup>
                <FormGroup>
                    <label for="status">Room Status-(Available/Under Maintenance) </label>
                    <Input 
                    type="text" 
                    placeholder ="Enter status here" 
                    name="status" 
                    id="status" />
                </FormGroup>
                
                <Container className="text-center">
                    <Button color="success">Submit</Button>
                    <Button color="dark " style={{margin:8}}>clear</Button>
                </Container>
            </Form>

        </div>
    )
}

export default AddRoom;