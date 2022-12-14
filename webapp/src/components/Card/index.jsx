import React from "react";
import cardPublic from "../../assets/images/cardPublic.jpg";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Placeholder from 'react-bootstrap/Placeholder';

export default function CardItem(CardData) {
  const data = CardData.CardData;

  return (
    <div>
  {data ? <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src={cardPublic} />
    <Card.Body>
      <Card.Title
        style={{
          height: "120px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        {data?.properties?.INF_NOME
          ? data?.properties.INF_NOME
          : data.properties.NOME_ESCOLA}
      </Card.Title>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item style={{ height: "80px" }}>
        {data?.properties?.INF_MORADA
          ? data?.properties?.INF_MORADA
          : data?.properties?.MORADA}
      </ListGroup.Item>
      <ListGroup.Item style={{ height: "80px" }}>
        {data?.properties?.INF_EMAIL
          ? data?.properties?.INF_EMAIL
          : data?.properties?.EMAIL}
      </ListGroup.Item>
      <ListGroup.Item>
        {data?.properties?.INF_TELEFONE
          ? data?.properties?.INF_TELEFONE
          : data?.properties?.TELEFONE}
      </ListGroup.Item>
    </ListGroup>
    <Card.Body    style={{
          height: "120px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
      <Button variant="warning" style={{width:"200px"}}>
        <Card.Link
          href={
            data?.properties?.INF_SITE
              ? data?.properties?.INF_SITE
              : data?.properties?.SITE
          } style={{textDecoration:"none", color:"white"}}>
          Website
        </Card.Link>
      </Button>
    </Card.Body>
  </Card> : <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Placeholder as={Card.Title} animation="glow">
        <Placeholder xs={6} />
      </Placeholder>
      <Placeholder as={Card.Text} animation="glow">
        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
        <Placeholder xs={6} /> <Placeholder xs={8} />
      </Placeholder>
      <Placeholder.Button variant="primary" xs={6} />
    </Card.Body>
  </Card> }
    </div>
  );
}