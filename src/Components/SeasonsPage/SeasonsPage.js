import React from 'react';

import style from './SeasonsPage.module.css';

import { seasonsService } from '../../services/seasonsService';
import { Container, Row, Col } from 'react-bootstrap';
import { Header } from '../Header/Header';
import { FullSeasons } from './FullSeasons/FullSeasons';
import { Loading } from '../Loading/Loading';

class SeasonsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            seasons: [],
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        seasonsService.getSeasons(this.props.match.params.id)
            .then(data => { this.setState({ seasons: data }) })

            .finally(() => this.setState({ isLoading: false }));
    }

    render() {
        return (
            <>
                <Header />
                <Container>
                    <Row>
                        <Col lg={12} md={12} sm={12}> {this.state.isLoading && <Loading />} </Col>
                        <Col lg={12}><h3 className={style.title}>SEASONS ({this.state.seasons.length})</h3></Col>
                    </Row>
                    <Row>
                        <FullSeasons seasons={this.state.seasons} />
                    </Row>
                </Container>
            </>
        )
    }
}

export { SeasonsPage }