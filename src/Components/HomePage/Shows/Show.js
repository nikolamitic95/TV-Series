import React from 'react';

import style from './Shows.module.css';
import imageNo from '../../../image/image.jpg';

import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Show = ({ name, avatar, id }) => {
    return (
        <Col className={style.show} lg={3} md={6} sm={12}>
            <Link className={style.link} to={`/info/${id}`}>
                <Card className={style.card} style={{ width: '100%' }}>
                    {avatar ?
                    <Card.Img variant="top" src={avatar} alt={name} />
                    :
                    <Card.Img variant="top" src={imageNo} alt={name} />}
                    <Card.Body>
                        <Card.Title className={style.name}>{name}</Card.Title>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    )
}

export { Show };