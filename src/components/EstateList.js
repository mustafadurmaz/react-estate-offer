import React from "react";
import { Container, Row, Card, Badge } from "react-bootstrap";

import "./EstateList.css";
import { Link } from "react-router-dom";
import { binlik } from "./functions";

function EstateList({ data }) {
  return (
    <>
      <Container>
        <h3>Vitrin</h3>

        <Container fluid className="App py-2 overflow-hidden">
          <Row className="card-example d-flex flex-row flex-wrap">
            {data.estateList.map((estate) => (
              <Card
                key={estate.id}
                className="estates m-3"
                style={{ width: "18rem" }}
              >
                <Link to={`/estates/${estate.id}`}>
                  <Card.Img variant="top" src={estate.img1} />
                </Link>
                <Card.Body>
                  <Card.Title>{binlik(estate.price)}₺</Card.Title>
                  <Card.Text>
                    {estate.category}/{estate.subcategory}
                    <br />
                    <span style={{ fontSize: 12 }}>
                      {estate.province}/{estate.district}/{estate.neighborhood}
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
