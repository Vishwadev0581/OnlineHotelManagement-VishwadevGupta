import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input,Card,
    CardBody,
    CardTitle,
    CardText,
    CardSubtitle,
    CardFooter,
    
    } from "reactstrap";

const SearchRoom=()=>{
    return(
        <div>
            <h2 className="text-center my-3">Search Room</h2>
            <Form>
                <FormGroup>
                    <label  className="my-2" for="roomType">Room Type</label>
                    <Input 
                    type="text" 
                    placeholder="Enter type here" 
                    name="roomType" 
                    id="roomType" 
                    //style={{width: 400}}
                    />

                </FormGroup>
                <FormGroup>
                    <label  className="my-2" for="checkIn">Check in Date</label>
                    <Input 
                    type="date" 
                    placeholder="Enter date here" 
                    name="checkIn" 
                    id="checkIn" 
                    //style={{width: 400}}
                    />

                </FormGroup>
                <FormGroup>
                    <label  className="my-2" for="noOfGuest">No of Guest</label>
                    <Input 
                    type="number" 
                    placeholder="Enter type here" 
                    name="noOfGuest" 
                    id="noOfGuest" 
                    //style={{width: 400}}
                    />

                </FormGroup>
                </Form>

                <Container className="text-center">
                    <Button  color="success">
                    <Link className="list-group-item list-group-item-action" tag="a" to="/receptionist/searchroom/result">Search</Link>
                    </Button>
                </Container>
                

                    
                
                
            

        </div>
    )
}

export default SearchRoom;