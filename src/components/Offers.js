import React from "react";
import { Container, Table } from "react-bootstrap";
import offerData from "../teklifler.json";

function Offers({ params }) {
  const offerList = offerData.teklifler.filter(
    (teklif) => teklif.id == params.id
  );
  console.log(offerList);
  return (
    <>
      <Container className="mt-5">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Gönderen</th>
              <th>Email</th>
              <th>Telefon</th>
              <th>Teklif Tarihi</th>
              <th>Gelen Teklif Tutarı</th>
            </tr>
          </thead>
          {offerList.map((offer) => (
            <tbody>
              <tr>
                <td>{offer.gonderen}</td>
                <td>{offer.email}</td>
                <td>{offer.tel}</td>
                <td>{offer.date}</td>
                <td>{offer.tutar}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </Container>
    </>
  );
}

export default Offers;
