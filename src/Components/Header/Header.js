import React from 'react';
import './Header.css';
import { Form, Navbar, FormControl, Nav, Container } from 'react-bootstrap';



const Header = () => {
    return (
        <Container fluid className="header">
            <Navbar variant="dark" bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="http://localhost:3000/">TV series</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Form>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    )
}

export { Header };