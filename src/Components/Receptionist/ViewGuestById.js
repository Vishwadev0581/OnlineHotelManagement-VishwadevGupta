import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input,Card,
    CardBody,
    CardTitle,
    CardText,
    CardSubtitle,
    CardFooter,
    
    } from "reactstrap";

const ViewGuestById=()=>{
    return(
        <div>
            <h2 className="text-center my-3">View Guest By Id</h2>
            <Form>
                <FormGroup>
                    <label  className="my-2" for="guestId">Enter guest Id</label>
                    <Input 
                    type="number" 
                    placeholder="Enter Id here" 
                    name="deguest" 
                    id="deguest" 
                    //style={{width: 400}}
                    />

                </FormGroup>
                </Form>

                <Container className="text-center">
                    <Button  color="success">
                    <Link className="list-group-item list-group-item-action" tag="a" to="/receptionist/viewguestbyid/result">Search</Link>
                    </Button>
                </Container>
                

                    
                
                
            

        </div>
    )
}

export default ViewGuestById;