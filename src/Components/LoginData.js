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
 
const LoginData = ({ loginData }) => {
 
   return (
       <Card className="text-center">
           <CardBody>
               <CardSubtitle className="fw-bold">LoginData username : {loginData.username}</CardSubtitle>
               
               <CardText>LoginData password : {loginData.password}</CardText>
               <CardText>LoginData role : {loginData.role}</CardText>
               
           </CardBody>
       </Card>
   );
 
};
 
export default LoginData;