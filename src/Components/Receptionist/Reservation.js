import React from "react";
import { Button, Container, Form, FormGroup, Input} from "reactstrap";
import { Link } from "react-router-dom";

const Reservation=()=>{
    return(
        <>
        <h1 className="text-center my-3">Fill Reservation Details</h1>
            <Form>
                <FormGroup>
                    <label for="noOfChildren">No of Children</label>
                    <Input 
                    type="number" 
                    placeholder="Enter here" 
                    name="noOfChildren" 
                    id="noOfChildren" 
                    
                    />
                </FormGroup>
                <FormGroup>
                    <label for="noOfAdults">No of Adults</label>
                    <Input 
                    type="number" 
                    placeholder="Enter here" 
                    name="noOfAdults" 
                    id="noOfAdults" 
                    
                    />
                </FormGroup>
                <FormGroup>
                    <label for="checkIn">Checkin Date </label>
                    <Input 
                    type="date" 
                    placeholder="Enter here" 
                    name="checkIn" 
                    id="checkIn" />
                </FormGroup>
                <FormGroup>
                    <label for="checkOut">Checkout Date </label>
                    <Input 
                    type="date" 
                    placeholder="Enter here" 
                    name="checkOut" 
                    id="checkOut" />
                </FormGroup>
                <FormGroup>
                    <label for="status">Status </label>
                    <Input 
                    type="text" 
                    placeholder="Enter status here" 
                    name="status" 
                    id="status" />
                </FormGroup>
                <FormGroup>
                    <label for="noOfNight">No of Nights</label>
                    <Input 
                    type="number" 
                    placeholder="Enter here" 
                    name="noOfNight" 
                    id="pnoOfNight" />
                </FormGroup>
                <FormGroup>
                    <label for="roomno">Room No </label>
                    <Input 
                    type="number" 
                    placeholder="Enter here" 
                    name="roomno" 
                    id="roomno" />
                </FormGroup>
                <FormGroup>
                    <label for="guestEmail">Guest Email </label>
                    <Input 
                    type="email" 
                    placeholder="Enter email here" 
                    name="guestEmail" 
                    id="guestEmail" />
                </FormGroup>
            
                <FormGroup>
                    <label for="guestPhoneNo">Phone No </label>
                    <Input 
                    type="number" 
                    placeholder="Enter here" 
                    name="guestPhoneNo" 
                    id="guestPhoneNo" />
                </FormGroup>
                
                
                
                <Container className="text-center">
                <Button  className="my-3 col-3" style={{color: "white" , backgroundColor: "#1F6D03", marginLeft: "30px"}}>
                    <Link className="list-group-item list-group-item-action" tag="a" to="/receptionist/searchroom/result/reservation">Confirm</Link>
                    </Button>
                    
                </Container>
            </Form>
        </>
    )
}

export default Reservation;