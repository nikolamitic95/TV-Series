import React from 'react';

import style from './AkasPage.module.css'

import { akaService } from '../../services/akaService';
import { Container, Row, Col, Card } from 'react-bootstrap';

class AkasPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            akas: []
        }
    }

    componentDidMount() {
        akaService.getAka(this.props.match.params.id)
            .then(data => { this.setState({ akas: data }) })
    }



    render() {
        return (
            <Container >
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <h4 className={style.title}>AKA's ({this.state.akas.length})</h4>
                        {this.state.akas.map(aka => (
                            <Card className={style.card}>
                                <Card.Body className={style.name}>{aka.name} : {aka.country}</Card.Body>
                                <Card.Body> timezone: {aka.timezone}</Card.Body>
                            </Card>
                        ))}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export { AkasPage }