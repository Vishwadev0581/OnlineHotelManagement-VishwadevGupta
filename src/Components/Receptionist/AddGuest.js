import React from "react";
import { Button, Container, Form, FormGroup, Input} from "reactstrap";

const AddGuest=()=>{
    return(
        <>
        <h1 className="text-center my-3">Fill Guest Details</h1>
            <Form>
                <FormGroup>
                    <label for="guestId">Guest Id</label>
                    <Input 
                    type="number" 
                    placeholder="Enter Id here" 
                    name="guestId" 
                    id="guestId" 
                    
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
                    <label for="phoneNumber">Phone No</label>
                    <Input 
                    type="tel" 
                    placeholder="Enter Salary here" 
                    name="phoneNumber" 
                    id="phoneNumbery" />
                </FormGroup>
                <FormGroup>
                    <label for="company">Company </label>
                    <Input 
                    type="text" 
                    placeholder="Enter company here" 
                    name="company" 
                    id="company" />
                </FormGroup>
                <FormGroup>
                    <label for="guestEmail">Email </label>
                    <Input 
                    type="email" 
                    placeholder="Enter email here" 
                    name="guestEmail" 
                    id="guestEmail" />
                </FormGroup>
            
                <FormGroup>
                    <label for="gender">Gender </label>
                    <Input 
                    type="text" 
                    placeholder="Enter Gender here" 
                    name="gender" 
                    id="gender" />
                </FormGroup>
                
                
                <br></br>
                
                <h5 >Address </h5>

                <FormGroup>
                    <label for="addressId">Address Id </label>
                    <Input 
                    type="number" 
                    placeholder="enter here" 
                    name="addressId" 
                    id="addressId" />
                </FormGroup>
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
                
                
                <Container className="text-center">
                    <Button color="success">Submit</Button>
                    <Button color="dark " style={{margin:8}}>clear</Button>
                </Container>
            </Form>
        </>
    )
}
 export default AddGuest;