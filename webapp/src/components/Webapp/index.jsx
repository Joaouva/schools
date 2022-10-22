import React from "react";
import Header from "../Header";
import List from "../List";
import Container from 'react-bootstrap/Container';
import "./style.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../Footer";

const Webapp = ( ) => {

   return (
      <div>
      <Container fluid>
         <Header/>
         <List/>
      </Container>
         <Footer/>
      </div>
   )
};

export default Webapp;