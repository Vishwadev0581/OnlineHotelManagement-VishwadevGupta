import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input,Card,
    CardBody,
    CardTitle,
    CardText,
    CardSubtitle,
    CardFooter,
    
    } from "reactstrap";

const SearchRoomResult=()=>{
    return(
        <div>
        <h2 className="text-center my-3">Following rooms are available </h2>
        <br></br>
                <Card className="text-center">
            <CardBody>
                <CardSubtitle className="fw-bold">Room No : 402</CardSubtitle>
                <br></br>
                <CardText>Type : Luxury</CardText>
                <CardText>Capacity : 3</CardText>
                <CardText>Status : Available</CardText>
                <CardText>Checkin Time : 12:00:00</CardText>
                <CardText>Checkin Time : 12:00:00</CardText>
                <CardText>First night Rate : 1000</CardText>
                <CardText>extension Rate : 700</CardText>
                <CardText>Booked Till : 2021-12-31</CardText>
                
                
                <Container className="text-center">
                    <Button  color="success">
                    <Link className="list-group-item list-group-item-action" tag="a" to="/receptionist/searchroom/result/reservation">Book Room</Link>
                    </Button>
                </Container>
            </CardBody>
        </Card>
                </div>
    )
}

export default SearchRoomResult;