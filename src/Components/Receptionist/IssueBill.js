import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input} from "reactstrap";

const IssueBill=()=>{
    return(
        <div>
            <h2 className="text-center my-3">Enter the Room No to Issue Bill</h2>
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
                    <Link className="list-group-item list-group-item-action" tag="a" to="/receptionist/issuebill/result">Generate Bill</Link>
                    </Button>
                </Container>
        </div>
    )
}

export default IssueBill;