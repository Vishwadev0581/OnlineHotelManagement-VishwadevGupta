import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input,Card,
    CardBody,
    CardTitle,
    CardText,
    CardSubtitle,
    CardFooter,
    
    } from "reactstrap";

const ViewDepartmentResult=()=>{
    return(
        <>
        <div>
        <h2 className="text-center my-3">Department Result</h2>
        <br></br>
                <Card className="text-center">
            <CardBody>
                <CardSubtitle className="fw-bold">Kitchen</CardSubtitle>
                <br></br>
                <CardText>Department Size : 25</CardText>
                <CardText>Department HOD : Rajesh Kumar</CardText>
                <CardText>HOD Phone No. : 9990661578</CardText>
                
                <Container className="text-center">
                    <Button  style={{color: "white" , backgroundColor: "#003333"}}>Update</Button>
                    <Button className="mx-2" style={{color: "white" , backgroundColor: "#999900"}}>Delete</Button>
                </Container>
            </CardBody>
        </Card>
                </div>
        </>
    )
}

export default ViewDepartmentResult;