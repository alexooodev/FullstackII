import { Navbar, Nav, Container } from "react-bootstrap";

const Navigation = (props) => {
  const { navegationItems } = props;
  // console.log(navegationItems);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Mi Tienda</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navegationItems.map((item) => {
              // console.log(item);
              return <Nav.Link href={item.link}>{item.text}</Nav.Link>;
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
