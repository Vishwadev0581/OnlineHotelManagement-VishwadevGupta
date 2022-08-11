import { Link } from "react-router-dom";
import React, { useState, handleClick, useStyles, useEffect } from "react";
import { Button, Container, Form, FormGroup, Input} from "reactstrap";
import LoginData from "./LoginData";
import axios from "axios";
import login_url from "../api/loginapi";
import base_url from "../api/bootapi";
 
 
const Login = () => {
    useEffect(() => {
        document.title = "Login";
    }, []);
 
    const [loginData, setLoginData] = useState({});
 
    // form handler function
    const handleForm = (e) => {
        console.log(loginData);
        sendDataToServer(loginData);
        e.preventDefault();
    };
 
 
// function to post data on backend
const sendDataToServer = (data) => {
    axios.get(`${base_url}ManageLogin/login`, data, {
        headers: {
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "*",
            "Username": "harsh@capg.co.in",
            "Password": "123456"
            //'Authorization': 'Basic ' + btoa(`harsh@capg.co.in : 123456`)
        }
    }).then(
        (response) => {
            console.log(response);
            console.log("success");
            var role = response.data.role;
            if (role === "ROLE_OWNER") {
                window.open("http://localhost:3000/owner", "_top");
               
            }
            else if(role ==="ROLE_MANAGER"){
                window.open("http://localhost:3000/manager", "_top");
            }
            else if(role ==="ROLE_RECEPTIONIST"){
                window.open("http://localhost:3000/receptionist", "_top");
            }
            else{
                window.open("http://localhost:3000", "_top");
            }
            
 
        }, (error) => {
            console.log(error);
            console.log("error");
        }
    )
};
 
    return(
        <div>
           
            <h1 className="text-center my-3">Login</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="username">Username</label>
                    <Input
                    type="email"
                    placeholder="Enter email here"
                    name="username"
                    id="username"
                    onChange={(e) => {
                        setLoginData({ ...loginData, username: e.target.value });
                    }}
                    //style={{width: 400}}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="password">Password </label>
                    <Input
                    type="password"
                    placeholder="Enter here"
                    name="password"
                    id="password" 
                    onChange={(e) => {
                        setLoginData({ ...loginData, password: e.target.value });
                    }}
                    />
                </FormGroup>
             
 
<Container className="text-center my-5" >
       
           <Button type="submit" className="col-4" style={{color: "white" , backgroundColor: "#6c6c6c"}}>Login</Button>
           
           <Link className="button" tag="a" to="/">
           <Button  style={{color: "white" , backgroundColor: "#000000"}} className="mx-3 col-4">Reset</Button></Link>
       </Container>
            </Form>
 
        </div>
 
    )
}
 
export default Login;
