import React from "react";
import {
   Card,
   CardBody,
   CardTitle,
   CardText,
   CardSubtitle,
   CardFooter,
   Button,
   Container,
} from "reactstrap";
 
const Department = ({ department }) => {
 
   return (
       <Card className="text-center">
           <CardBody>
               <CardSubtitle className="fw-bold">{department.name}</CardSubtitle>
               <br></br>
               <CardText>Department Id : {department.id}</CardText>
               <CardText>Department HOD : {department.hodName}</CardText>
               <CardText>HOD Phone No. : {department.hodPhoneNo}</CardText>
               <CardText>Department Size : {department.sizeOfDepartment}</CardText>
 
               <Container className="text-center">
                   <Button style={{ color: "white", backgroundColor: "#003333" }}>Update</Button>
                   <Button className="mx-2" style={{ color: "white", backgroundColor: "#999900" }}>Delete</Button>
               </Container>
           </CardBody>
       </Card>
   );
 
};
 
export default Department;

