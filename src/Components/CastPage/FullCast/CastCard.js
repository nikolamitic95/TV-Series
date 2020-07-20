import React from 'react';

import style from './CastCard.module.css';

import { Card, Col } from 'react-bootstrap';

const CastCard = ({ name, character, image }) => {
    return (
        <Col className={style.show} lg={3} md={6} sm={12}>
            <Card className={style.card} style={{ width: '100%' }}>
                {image ?
                    <Card.Img variant="top" src={image} />
                    :
                    <Card.Img className={style.img} variant="top" src='../../image/no-image.jpg' />
                }
                <Card.Body>
                    <Card.Title className={style.name}>{name}</Card.Title>
                    <Card.Title className={style.character}>({character})</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    )
}

export { CastCard };