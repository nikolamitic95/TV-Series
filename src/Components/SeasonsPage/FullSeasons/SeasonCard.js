import React from 'react';

import style from './SeasonCard.module.css';

import { Card, Col } from 'react-bootstrap';



const SeasonCard = ({ premiereDate, endDate, episode, image }) => {
    return (
        <Col className={style.show} lg={3} md={6} sm={12}>
            <Card className={style.card} style={{ width: '100%' }}>
                <Card.Img variant="top" src={image}  />
                <Card.Body>
                    <Card.Title className={style.date}>{premiereDate} - {endDate}</Card.Title>
                    <Card.Title className={style.episode}>Episode ({episode})</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    )
}

export { SeasonCard };