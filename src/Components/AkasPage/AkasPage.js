import React from 'react';

import style from './AkasPage.module.css'

import { akaService } from '../../services/akaService';
import { Header } from '../Header/Header';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Loading } from '../Loading/Loading';

class AkasPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            akas: [],
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        akaService.getAka(this.props.match.params.id)
            .then(data => { this.setState({ akas: data }) })
            .finally(() => this.setState({ isLoading: false }));
    }

    render() {
        return (
            <>
                <Header />
                <Container >
                    <Row>
                        <Col lg={12} md={12} sm={12}> {this.state.isLoading && <Loading />} </Col>
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
            </>
        )
    }
}

export { AkasPage }