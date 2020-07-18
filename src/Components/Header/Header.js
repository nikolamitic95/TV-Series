import React from 'react';

import style from './Header.module.css';

import { Form, Navbar, FormControl, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <Container fluid className={style.wrapper}>
            <Navbar className={style.header} variant="dark" bg="dark" expand="lg">
                <Container className={style.center}>
                    <Link to='/'> <Navbar.Brand className={style.title} >TV series</Navbar.Brand> </Link>
                    <Form className={style.form}>
                        <FormControl type="text" placeholder="Search" />
                    </Form>
                </Container>
            </Navbar>
        </Container>
    )
}

export { Header };