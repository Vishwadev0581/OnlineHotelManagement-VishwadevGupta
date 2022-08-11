import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input} from "reactstrap";

const ViewRoomByRoomNo=()=>{
    return(
        <div>
            <h2 className="text-center my-3">View Room by Room Number</h2>
            <Form>
                <FormGroup>
                    <h5><label  className="my-2" for="roomno">Enter Room No</label></h5>
                    <Input 
                    type="number" 
                    placeholder="Enter here" 
                    name="roomno" 
                    id="roomno" 
                    //style={{width: 400}}
                    />

                </FormGroup>
                </Form>
                <Container className="text-center">
                    <Button  color="success">
                    <Link className="list-group-item list-group-item-action" tag="a" to="/manager/viewroombyroomno/result">Search</Link>
                    </Button>
                </Container>
        </div>
    )
}

export default ViewRoomByRoomNo;