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

const User =({user})=>{

    return(
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="fw-bold">{user.name}</CardSubtitle>
                <br></br>
                <CardText>Email : {user.username}</CardText>
                <CardText>Password : {user.password}</CardText>
                <CardText>Role : {user.role}</CardText>
                
                <Container className="text-center">
                    <Button color="warning">Delete</Button>
                </Container>
            </CardBody>
        </Card>
    );

};

export default User;
