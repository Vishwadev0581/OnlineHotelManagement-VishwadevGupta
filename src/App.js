import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import Home from './Components/Home';
import Department from './Components/Department';
import AllDepartments from './Components/AllDepartments';
import AddDepartment from './Components/AddDepartment';
import { Col, Container, Row } from 'reactstrap';
import OwnerMenu from './Components/OwnerMenu';

function App() {

  // const btnHandle=()=>{
  //   toast("SUCCESS")
  // }

  return (
    <div>
      <Container>
        <Header />
        <Row>
          <Col md={4}>
            <OwnerMenu />
          </Col>
          <Col md={8}>
            <Home/>
          </Col>
        </Row>
      </Container>
    </div>
    
  );
}

export default App;