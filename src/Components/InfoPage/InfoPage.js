import React from 'react';

import style from './InfoPage.module.css';

import { showService } from '../../services/showService';
import { seasonsService } from '../../services/seasonsService';
import { castService } from '../../services/castService';
import { crewService } from '../../services/crewService';
import { akaService } from '../../services/akaService';
import { Container, Row, Col } from 'react-bootstrap';
import { Seasons } from './Seasons/Seasons';
import { Persons } from './Cast/Persons';
import { CrewPersons } from './Crew/CrewPersons';
import { Akas } from './Akas/Akas';


class InfoPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            singleShow: [],
            seasons: [],
            cast: [],
            crew: [],
            akas: []
        }
    }

    componentDidMount() {
        showService.getSingleShow(this.props.match.params.id)
            .then(data => { this.setState({ singleShow: data }) })
        seasonsService.getSeasons(this.props.match.params.id)
            .then(data => { this.setState({ seasons: data }) })
        castService.getCast(this.props.match.params.id)
            .then(data => { this.setState({ cast: data }) })
        crewService.getCrew(this.props.match.params.id)
            .then(data => { this.setState({ crew: data }) })
        akaService.getAka(this.props.match.params.id)
            .then(data => { this.setState({ akas: data }) })
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
                            <Col lg={12}>
                                <h3>CREW</h3>
                                <CrewPersons crew={this.state.crew} />
                            </Col>
                            <Col lg={12}>
                                <h3>AKA's</h3>
                                <Akas akas={this.state.akas} />
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