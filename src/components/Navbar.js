  import Button from 'react-bootstrap/Button';
  import Container from 'react-bootstrap/Container';
  import Form from 'react-bootstrap/Form';
  import Nav from 'react-bootstrap/Nav';
  import Navbar from 'react-bootstrap/Navbar';
  import NavDropdown from 'react-bootstrap/NavDropdown';
  
  function NavScrollExample() {
    return (
      <Navbar bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand className="text-white" href="#">Navbar</Navbar.Brand>
          <Navbar.Toggle className="text-white" aria-controls="navbarScroll" />
          <Navbar.Collapse className="text-white" id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px'}}
              navbarScroll
            >
              <Nav.Link className="text-white" href="#action1">Home</Nav.Link>
              <Nav.Link className="text-white" href="#action2">Link</Nav.Link>
              <NavDropdown className="text-white" title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="secondary">knap</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default NavScrollExample;
