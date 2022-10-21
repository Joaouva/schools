import React from "react";
import Header from "../Header";
import List from "../List";
import Container from 'react-bootstrap/Container';
import "./style.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../Footer";

const Webapp = ( ) => {

   return (
      <Container fluid>
         <Header/>
         <List/>
         <Footer/>
      </Container>
   )
};

export default Webapp;