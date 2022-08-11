import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input,Card,
    CardBody,
    CardTitle,
    CardText,
    CardSubtitle,
    CardFooter,
    
    } from "reactstrap";

const ViewDepartmentById=()=>{
    return(
        <div>
            <h2 className="text-center my-3">View Department By Id</h2>
            <Form>
                <FormGroup>
                    <label  className="my-2" for="departmentId">Enter Department Id</label>
                    <Input 
                    type="number" 
                    placeholder="Enter Id here" 
                    name="departmentId" 
                    id="departmentId" 
                    //style={{width: 400}}
                    />

                </FormGroup>
                </Form>

                <Container className="text-center">
                    <Button  color="success">
                    <Link className="list-group-item list-group-item-action" tag="a" to="/owner/viewdepartmentbyid/result">Search</Link>
                    </Button>
                </Container>
                

                    
                
                
            

        </div>
    )
}

export default ViewDepartmentById;