import React from "react";
import { Container, Row, Card, Badge } from "react-bootstrap";

import "./EstateList.css";
import { Link } from "react-router-dom";
import { binlik } from "./functions";

function EstateList({ data }) {
  return (
    <>
      <div style={{backgroundColor:"#f8f8f8"}}>
      <Container id="listcontainer">
        <h3 id="title">Vitrin</h3>

        <Container fluid className="App py-2 overflow-hidden">
          <Row className="card-example d-flex flex-row flex-wrap">
            {data.estateList.map((estate) => (
              <Card
                key={estate.id}
                className="estates m-3"
                style={{ width: "15rem" }}
              >
                <Link to={`/estates/${estate.id}`}>
                  <Card.Img className="imageList" variant="top" src={estate.img1} />
                </Link>
                <Card.Body>
                  <Card.Title id="price" >{binlik(estate.price)}₺</Card.Title>
                  <Card.Text id="category">
                    {estate.category} / {estate.subcategory}
                    <br />
                    <span>
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
      </div>
    </>
  );
}

export default EstateList;
