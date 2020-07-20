import React from 'react';

import style from './Episodes.module.css';
import imageNo from '../../../image/image.jpg';

import { Card, Col } from 'react-bootstrap';

const Episode = ({ name, image }) => {
    return (
        <Col lg={3} md={6} sm={12}>
            <Card className={style.card} style={{ width: '100%' }}>
                {image ?
                    <Card.Img variant="top" src={image} />
                    :
                    <Card.Img className={style.img} variant="top" src={imageNo} />
                }
                <Card.Body>
                    <Card.Title className={style.name}>{name}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    )
}

export { Episode };