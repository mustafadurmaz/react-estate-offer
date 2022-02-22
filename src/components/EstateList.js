import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { useState, useEffect } from "react";
import data from "../estateList.json";
import "./EstateList.css"

function EstateList() {
  const [estates, setEstates] = useState([]);

  function binlik(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  console.log(data.estateList);

  return (
    <>
      <Container>
        <h3>Vitrin</h3>

        <Container fluid className="App py-2 overflow-hidden">
          <Row className="card-example d-flex flex-row flex-wrap">
            {data.estateList.map((estate) => (
           
                <Card className="estates m-3" style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={estate.img1} />
                  <Card.Body>
                    <Card.Title>{binlik(estate.price)}₺</Card.Title>
                    <Card.Text>
                      {estate.category}/{estate.subcategory}
                      <br />
                      <span style={{ fontSize: 12 }}>
                        {estate.province}/{estate.district}/
                        {estate.neighborhood}
                      </span>
                    </Card.Text>
                  </Card.Body>
                  <Badge className="badge" pill bg="danger">
                    Kalan süre: 30 gün
                  </Badge>{" "}
                </Card>
            
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default EstateList;
