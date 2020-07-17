import React from 'react';
import style from './Footer.module.css';

import { Container, Row, Col } from 'react-bootstrap';



const Footer = () => {
    return (
        <Container fluid className={style.footer} >
            <Container >
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}> <h5 className={style.title} >&copy; 2020 Copyright Nikola Mitić</h5></Col>
                </Row>
            </Container>
        </Container>
    )
}

export { Footer };