import React from 'react';

import style from './SeasonCard.module.css';

import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const SeasonCard = ({ premiereDate, endDate, episode, image, id }) => {
    return (
        <Col className={style.show} lg={3} md={6} sm={12}>
            <Card className={style.card} style={{ width: '100%' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className={style.date}>{premiereDate} - {endDate}</Card.Title>
                    <Link className={style.link} to={`/info/seasons/episodes/${id}`}>
                        <Button className={style.episode}>Episodes</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export { SeasonCard };