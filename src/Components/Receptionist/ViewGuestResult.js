import React from "react";
import { Button, Container, Form, FormGroup, Input,Card,
    CardBody,
    CardTitle,
    CardText,
    CardSubtitle,
    CardFooter,
    
    } from "reactstrap";

const ViewGuestResult=()=>{
    return(
        <div>
        <h2 className="text-center my-3">Guest Result</h2>
        <br></br>
                <Card className="text-center">
            <CardBody>
                <CardSubtitle className="fw-bold">Kishan</CardSubtitle>
                <br></br>
                <CardText>Last Name : singh</CardText>
                <CardText>Phone No. : 9990661578</CardText>
                <CardText>Company : Capgemini</CardText>
                <CardText>Email : jahd@hmd.com</CardText>
                <CardText>Gnder : Male</CardText>
                <CardText>Address Id : 101</CardText>
                <CardText>StreetName : Shahdara</CardText>
                <CardText>City : Bhutan</CardText>
                <CardText>State : U.P</CardText>
                <CardText>Pincode :110032</CardText>
                
                <Container className="text-center">
                    <Button  style={{color: "white" , backgroundColor: "#003333"}}>Update</Button>
                    <Button className="mx-2" style={{color: "white" , backgroundColor: "#999900"}}>Delete</Button>
                </Container>
            </CardBody>
        </Card>
                </div>
    )
}

export default ViewGuestResult;