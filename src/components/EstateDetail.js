import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col, Table, Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import { timeConverter, binlik } from "./functions";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Offers from "./Offers";
import Form from "./Form";
import axios from "axios";
import { init, send, subscribe } from "../socketApi";

function EstateDetail({ data, setIsActive }) {
  // const [listOffer, setListOffer] = useState([]);
  const [socketData, setSocketData] = useState([]);
  const params = useParams();

  socketData.sort(function (a, b) {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  const offerList = socketData.filter((teklif) => teklif.id === Number(params.id));

  useEffect(() => {
    axios.get("http://localhost:3001/getoffers").then((response) => {
      setSocketData(response.data);
      init();

      send(response.data);
      subscribe((offer) => {
        setSocketData(offer);
      });
    });
  }, []);
  const dataList = data.estateList.filter((estate) => estate.id === Number(params.id));

  useEffect(()=>{
    if (params) {
      setIsActive(false);
    } 

    return () => {
      setIsActive(true);
  }
    
  },[]);

  const d = new Date();
  let year = d.getFullYear();

  const imageData = [
    dataList[0].img1,
    dataList[0].img2,
    dataList[0].img3,
    dataList[0].img4,
    dataList[0].img5,
  ];

  return (
    <>
      <Container>
        <Card>
          <Card.Body>
            <Card.Text>
              <IoMdArrowDropright />
              Vitrin <IoMdArrowDropright />
              {dataList[0].category} <IoMdArrowDropright />
              {dataList[0].type} <IoMdArrowDropright />
              {dataList[0].subcategory}
            </Card.Text>

            <Form params={params} offerList={offerList} />
            <Card.Title>
              {dataList[0].neighborhood} {dataList[0].room}{" "}
              {dataList[0].room && <span>Odalı</span>} {dataList[0].type}{" "}
              {dataList[0].subcategory}{" "}
            </Card.Title>
          </Card.Body>
        </Card>
      </Container>
      <Container className="mt-3">
        <Row>
          <Col sm={4}>
            <h2 className="fw-bold">{binlik(dataList[0].price)}₺</h2>
            <p className="fw-bold" style={{ color: "#ED9D3D" }}>
              {dataList[0].province}/{dataList[0].district}/
              {dataList[0].neighborhood} /{dataList[0].block}-
              {dataList[0].parcel}
            </p>
            <Table striped bordered hover size="sm">
              <tbody style={{ fontSize: 14 }}>
                <tr>
                  <td className="fw-bold">İlan Tarihi</td>
                  <td>{timeConverter(dataList[0].postDate)}</td>
                </tr>
                <tr>
                  <td className="fw-bold">Emlak Tipi</td>
                  <td>
                    {dataList[0].type} {dataList[0].subcategory}
                  </td>
                </tr>
                <tr>
                  <td className="fw-bold">m² (Brüt)</td>
                  <td>{dataList[0].grossArea}</td>
                </tr>
                <tr>
                  <td className="fw-bold">m² (Net)</td>
                  <td>{dataList[0].netArea}</td>
                </tr>
                <tr>
                  <td className="fw-bold">Oda Sayısı</td>
                  {dataList[0].room ? (
                    <td>{dataList[0].room}</td>
                  ) : (
                    <td>Belirtilmemiş</td>
                  )}
                </tr>
                <tr>
                  <td className="fw-bold">Bina Yaşı</td>
                  {dataList[0].constructionYear ? (
                    <td>{year - dataList[0].constructionYear}</td>
                  ) : (
                    <td>Belirtilmemiş</td>
                  )}
                </tr>
                <tr>
                  <td className="fw-bold">Kat Sayısı</td>
                  {dataList[0].totalFloor ? (
                    <td>{dataList[0].totalFloor}</td>
                  ) : (
                    <td>Belirtilmemiş</td>
                  )}
                </tr>
                <tr>
                  <td className="fw-bold">Isıtma</td>
                  {dataList[0].heating ? (
                    <td>{dataList[0].heating}</td>
                  ) : (
                    <td>Belirtilmemiş</td>
                  )}
                </tr>
                <tr>
                  <td className="fw-bold">Banyo Sayısı</td>
                  {dataList[0].bathroom ? (
                    <td>{dataList[0].bathroom}</td>
                  ) : (
                    <td>Belirtilmemiş</td>
                  )}
                </tr>
                <tr>
                  <td className="fw-bold">Eşyalı</td>
                  {dataList[0].furnished ? <td>Evet</td> : <td>Hayır</td>}
                </tr>
                <tr>
                  <td className="fw-bold">Kullanım Durumu</td>
                  {dataList[0].usageStatus ? <td>Evet</td> : <td>Hayır</td>}
                </tr>
                <tr>
                  <td className="fw-bold">Site İçierisinde</td>
                  {dataList[0].inSite ? <td>Evet</td> : <td>Hayır</td>}
                </tr>
                <tr>
                  <td className="fw-bold">Aidat (TL)</td>
                  {dataList[0].dues ? (
                    <td>{dataList[0].dues}</td>
                  ) : (
                    <td>Belirtilmemiş</td>
                  )}
                </tr>
                <tr>
                  <td className="fw-bold">Krediye Uygun</td>
                  {dataList[0].creditEligibility ? (
                    <td>Evet</td>
                  ) : (
                    <td>Hayır</td>
                  )}
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col sm={8}>
            <Carousel>
              {imageData.map((image,index) => (
                <div key={image}>
                  <img src={image} alt={image} />
                </div>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
      <Container>
        <Nav variant="pills" defaultActiveKey="#">
          <Nav.Item>
            <Nav.Link href="#">TEKLİFLER</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">KONUM</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
      <Offers params={params} offerList={offerList} />
    </>
  );
}

export default EstateDetail;
