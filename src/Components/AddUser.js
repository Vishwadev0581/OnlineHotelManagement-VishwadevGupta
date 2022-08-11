import React from "react";

import { Button, Container, Form, FormGroup, Input} from "reactstrap";




const AddUser=()=>{
    return (
        <div>
            <h1 className="text-center my-3">Fill User Details</h1>
            <Form>
                <FormGroup>
                    <label for="userName">User Name</label>
                    <Input 
                    type="text" 
                    placeholder="Enter Name here" 
                    name="userName" 
                    id="userName" 
                    //style={{width: 400}}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="userEmail">User Email </label>
                    <Input 
                    type="email"
                    placeholder="Enter email here" 
                    name="userEmail" 
                    id="userEmail" />
                </FormGroup>
                <FormGroup>
                    <label for="userPassword">Password </label>
                    <Input 
                    type="password" 
                    placeholder="Enter Password here" 
                    name="userPassword" 
                    id="userPassword" />
                </FormGroup>
                <FormGroup>
                    <label for="userRole">User Role</label>
                    <Input 
                    type="text" 
                    placeholder="Enter Role here" 
                    name="userRole" 
                    id="userRole" />
                </FormGroup>
                <Container className="text-center">
                    <Button color="success">Submit</Button>
                    <Button color="dark " style={{margin:8}}>clear</Button>
                </Container>
            </Form>

        </div>
    );
};

export default AddUser;