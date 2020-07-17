import React from 'react';

import './Shows.css';

import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Show = ({ name, avatar, id }) => {
    return (
        <Col className="shows__show" lg={4}>
            <Link to={`/info/${id}`}>
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src={avatar} alt={name} />
                    <Card.Body>
                        <Card.Title className="shows__show_name">{name}</Card.Title>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    )
}

export { Show };