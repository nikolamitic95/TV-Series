import React from 'react';

import style from './HomePage.module.css'

import { Shows } from './Shows/Shows';
import { showService } from '../../services/showService';
import { Container, Row, Col } from 'react-bootstrap';
import { Header } from '../Header/Header';
import { Loading } from '../Loading/Loading';


class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            shows: [],
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        showService.getShows()
            .then(data => {
                this.setState({ shows: data })
            })
            .finally(() => this.setState({ isLoading: false }));
    }

    render() {

        return (
            <>
                <Header />
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h1 className={style.title}>Popular Shows</h1>
                        </Col>
                        <Col lg={12} md={12} sm={12}> {this.state.isLoading && <Loading />} </Col>
                        <Shows shows={this.state.shows} isLoading={this.state.isLoading} />
                    </Row>
                </Container>
            </>
        )
    }
}

export { HomePage }