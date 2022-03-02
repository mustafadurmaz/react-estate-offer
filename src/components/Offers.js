import React from "react";
import { Container } from "react-bootstrap";
import { binlik } from "./functions";
import { formatDate } from "./functions";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

function Offers({ offerList }) {
  return (
    <>
      <Container className="mt-5 mb-5">
        <Table>
          <Thead>
            <Tr style={{color:"#0067a0"}}> 
              <Th>Gönderen</Th>
              <Th>Email</Th>
              <Th>Telefon</Th>
              <Th>Teklif Tarihi</Th>
              <Th>Gelen Teklif Tutarı</Th>
            </Tr>
          </Thead>
          {offerList.map((offer) => (
            <Tbody key={offer._id}>
              <Tr style={{color:"#002b49"}}>
                <Td>
                  {offer.name} {offer.surname}
                </Td>
                <Td>{offer.email}</Td>
                <Td>{offer.tel}</Td>
                <Td>{formatDate(new Date(`${offer.createdAt}`))}</Td>
                <Td>{binlik(offer.tutar)}₺</Td>
              </Tr>
            </Tbody>
          ))}
        </Table>
      </Container>
    </>
  );
}

export default Offers;
