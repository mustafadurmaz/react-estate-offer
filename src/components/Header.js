import React from "react";
import { Navbar, Container, Nav, Button, NavDropdown,ButtonGroup } from "react-bootstrap";
import { AiOutlineUser} from "react-icons/ai";

function Header() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">GABORAS</Navbar.Brand>
          <Nav className="me-auto">
            <NavDropdown title="Piyasa" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#piyasa1">Piyasa1</NavDropdown.Item>
              <NavDropdown.Item href="#piyasa2">Piyasa2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#piyasa3">Piyasa3</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="İhaleler" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#ihaleler1">İhaleler1</NavDropdown.Item>
              <NavDropdown.Item href="#ihaleler2">İhaleler2</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Varlık Yönetimi" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#varlik1">
                Varlık Yönetimi1
              </NavDropdown.Item>
              <NavDropdown.Item href="#varlik2">
                Varlık Yönetimi2
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <ButtonGroup>
              <AiOutlineUser style={{height:40}} />
            <Button variant="light"  to="/login">
              Giriş Yap
            </Button>
            <Button variant="light"  to="/signup">
              Kaydol
            </Button>
          </ButtonGroup>
        </Container>
      </Navbar>
    </>
  );
}



export default Header;
