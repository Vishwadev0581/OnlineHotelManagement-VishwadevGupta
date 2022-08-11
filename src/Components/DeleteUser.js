import React from "react";
import { Button, Container, Form, FormGroup, Input} from "reactstrap";

const DeleteUser=()=>{
    return(
        <div>
            <h2 className="text-center my-3">Delete User</h2>
            <Form>
                <FormGroup>
                    <label  className="my-2" for="username">Enter Username/Email</label>
                    <Input 
                    type="email" 
                    placeholder="Enter here" 
                    name="username" 
                    id="username" 
                    />

                </FormGroup>
                </Form>
                <Container className="text-center">
                    <Button style={{color: "white" , backgroundColor: "#999900"}}>Delete</Button>
                </Container>
        </div>
    )
}

export default DeleteUser;