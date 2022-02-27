import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import {binlik} from "./functions";
import { formatDate } from "./functions";


function Offers({ params, offerList }) {
  

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
                <td>
                  {offer.name} {offer.surname}
                </td>
                <td>{offer.email}</td>
                <td>{offer.tel}</td>
                <td>{formatDate(new Date(`${offer.createdAt}`))}</td>
                <td>{binlik(offer.tutar)}₺</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </Container>
    </>
  );
}

export default Offers;
