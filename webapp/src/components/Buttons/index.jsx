import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

export default function Buttons({setTypeOfSchool, typeOfSchool}) {
   const[activePrivate, setActivePrivate] = useState(false);
   const[activePublic, setActivePublic] = useState(false);
   
  
   const handleClick = (type) => {
    setTypeOfSchool(type);
  };

  return (
    <div>
      <Button
      style={{margin:"5px"}}
        variant={typeOfSchool === "" ? "success" : "light"}
        onClick={() => {
          handleClick("");
        }}>
        All
      </Button>
      <Button
      style={{margin:"5px"}}
        variant={typeOfSchool === "private" ? "success" : "light"}
        onClick={() => {
          handleClick("private");
        }}>
        Private
      </Button>
      <Button
      style={{margin:"5px"}}
        variant={typeOfSchool === "public" ? "success" : "light"}
        onClick={() => {
          handleClick("public");
        }}>
        Public
      </Button>
    </div>
  );
}
