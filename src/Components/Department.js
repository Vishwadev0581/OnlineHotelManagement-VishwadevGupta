
import React from "react";
import{
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardSubtitle,
    CardFooter,
    Button,
    Container,
} from "reactstrap";

const Department =({department})=>{

    return(
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="fw-bold">{department.name}</CardSubtitle>
                <br></br>
                <CardText>Department Size : {department.size}</CardText>
                <CardText>Department HOD : {department.hodName}</CardText>
                <CardText>HOD Phone No. : {department.hodPhoneNo}</CardText>
                
                <Container className="text-center">
                    <Button color="warning">Delete</Button>
                </Container>
            </CardBody>
        </Card>
    );

};

export default Department;