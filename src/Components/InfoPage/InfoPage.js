import React from 'react';

import style from './InfoPage.module.css';

import { showService } from '../../services/showService';
import { seasonsService } from '../../services/seasonsService';
import { castService } from '../../services/castService';
import { Container, Row, Col } from 'react-bootstrap';
import { Seasons } from './Seasons/Seasons';
import { Persons } from './Cast/Persons';


class InfoPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            singleShow: [],
            seasons: [],
            cast: []
        }
    }

    componentDidMount() {
        showService.getSingleShow(this.props.match.params.id)
            .then(data => { this.setState({ singleShow: data }) })
        seasonsService.getSeasons(this.props.match.params.id)
            .then(data => { this.setState({ seasons: data }) })
        castService.getCast(this.props.match.params.id)
            .then(data => { this.setState({ cast: data }) })
    }

    render() {

        return (
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <h1 className={style.title}>
                            {this.state.singleShow.name}
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col lg={8}>
                        <img src={this.state.singleShow.avatarInfo}></img>
                    </Col>
                    <Col lg={4}>
                        <Row>
                            <Col lg={12}>
                                <h3>SEASONS ({this.state.seasons.length})</h3>
                                <Seasons seasons={this.state.seasons} />
                            </Col>
                            <Col lg={12}>
                                <h3>CAST</h3>
                                <Persons cast={this.state.cast} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <h3 className={style.title1}>Show Details</h3>
                    </Col>
                    <Col lg={12}>
                        <p>{this.state.singleShow.summary}</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export { InfoPage }