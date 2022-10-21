import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function SearchBar({value, setSearchInput}) {

   const handleChange = (event) => {
      event.preventDefault();
      setSearchInput(event.target.value);
    };

  return (
    <div>
      <Form className="d-flex">
        <Form.Control
          defaultValue={value}
          onChange={(e) => handleChange(e)}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </div>
  );
}
