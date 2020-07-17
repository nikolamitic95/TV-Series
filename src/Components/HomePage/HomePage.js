import React from 'react';

import style from './HomePage.module.css'

import { Shows } from './Shows/Shows';
import { showService } from '../../services/showService';
import { Container, Row, Col } from 'react-bootstrap';


class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            shows: []
        }
    }

    componentDidMount() {
        showService.getShows()
            .then(data => {
                this.setState({ shows: data })
            })
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col lg={12}>
                        <h1 className={style.title}>Popular Shows</h1>
                    </Col>
                    <Shows shows={this.state.shows} />
                </Row>
            </Container>
        )
    }
}

export { HomePage }