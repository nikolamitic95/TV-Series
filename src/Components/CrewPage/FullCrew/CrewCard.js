import React from 'react';

import style from './CrewCard.module.css';

import { Card, Col } from 'react-bootstrap';

const CrewCard = ({ type, name, image }) => {
    return (
        <Col lg={3} md={6} sm={12}>
            <Card className={style.card} style={{ width: '100%' }}>
                {image ?
                    <Card.Img variant="top" src={image} />
                    :
                    <Card.Img className={style.img} variant="top" src='../../../image/no-image.jpg' />
                }
                <Card.Body>
                    <Card.Title className={style.type}>{type}</Card.Title>
                    <Card.Title className={style.name}>{name}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    )
}

export { CrewCard };