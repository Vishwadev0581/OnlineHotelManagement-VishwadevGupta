import React from "react";
import { Button, Container, Form, FormGroup, Input} from "reactstrap";

const AddStaff=()=>{
    return(
        
        <div>
            
            <h1 className="text-center my-3">Fill Staff Details</h1>
            <Form>
                <FormGroup>
                    <label for="staffId">Code</label>
                    <Input 
                    type="number" 
                    placeholder="Enter Id here" 
                    name="staffId" 
                    id="staffId" 
                    
                    />
                </FormGroup>
                <FormGroup>
                    <label for="firstName">First Name </label>
                    <Input 
                    type="text" 
                    placeholder="Enter First Name here" 
                    name="firstName" 
                    id="firstName" />
                </FormGroup>
                <FormGroup>
                    <label for="lastName">Last Name </label>
                    <Input 
                    type="text" 
                    placeholder="Enter last Name here" 
                    name="lastName" 
                    id="lastName" />
                </FormGroup>
                <FormGroup>
                    <label for="staffSalary">Salary </label>
                    <Input 
                    type="number" 
                    placeholder="Enter Salary here" 
                    name="staffSalary" 
                    id="staffSalary" />
                </FormGroup>
                <FormGroup>
                    <label for="joinedOn">Joining Date </label>
                    <Input 
                    type="date"
                    placeholder="Enter date here" 
                    name="joinedOn" 
                    id="joinedOn" />
                </FormGroup>
                <FormGroup>
                    <label for="staffAge">Age </label>
                    <Input 
                    type="number" 
                    placeholder="Enter Age here" 
                    name="staffAge" 
                    id="staffAge" />
                </FormGroup>
                <FormGroup>
                    <label for="staffOccupation">Occupation </label>
                    <Input 
                    type="text" 
                    placeholder="Enter occupation here" 
                    name="staffOccupation" 
                    id="staffOccupation" />
                </FormGroup>
                <FormGroup>
                    <label for="staffEmail">Email </label>
                    <Input 
                    type="email" 
                    placeholder="Enter email here" 
                    name="staffEmail" 
                    id="staffEmail" />
                </FormGroup>
                <br></br>
                
                <h5 >Address </h5>
                <FormGroup>
                    <label for="streetName">StreetName </label>
                    <Input 
                    type="text" 
                    placeholder="enter here" 
                    name="streetName" 
                    id="streetName" />
                </FormGroup>
                <FormGroup>
                    <label for="houseNo">House No </label>
                    <Input 
                    type="text" 
                    placeholder="enter here" 
                    name="houseNo" 
                    id="houseNo" />
                </FormGroup>
                <FormGroup>
                    <label for="city">City </label>
                    <Input 
                    type="text" 
                    placeholder="enter here" 
                    name="city" 
                    id="city" />
                </FormGroup>
                <FormGroup>
                    <label for="country">Country </label>
                    <Input 
                    type="text" 
                    placeholder="enter here" 
                    name="country" 
                    id="country" />
                </FormGroup>
                <FormGroup>
                    <label for="pincode">Pincode </label>
                    <Input 
                    type="number" 
                    placeholder="enter here" 
                    name="pincode" 
                    id="pincode" />
                </FormGroup>
                <FormGroup>
                    <label for="addressId">Address Id </label>
                    <Input 
                    type="number" 
                    placeholder="enter here" 
                    name="addressId" 
                    id="addressId" />
                </FormGroup>
                
                <Container className="text-center">
                    <Button color="success">Submit</Button>
                    <Button color="dark " style={{margin:8}}>clear</Button>
                </Container>
            </Form>

        </div>
    )
}

export default AddStaff;