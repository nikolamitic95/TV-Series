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
import { Link } from 'react-router-dom';


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
                    <Col lg={6}>
                        <img className={style.img} src={this.state.singleShow.avatarInfo}></img>
                    </Col>
                    <Col lg={4}>
                        <Row>
                            <Col lg={12}>
                                <h4>SEASONS ({this.state.seasons.length})</h4>
                                <ul className={style.list}>
                                    <Seasons seasons={this.state.seasons} />
                                </ul>
                                {this.state.seasons.length > 5 &&
                                    <ul>
                                        <Link to={`/info/seasons/${this.props.match.params.id}`}>
                                            <li className={style.full}> . . . see Full Seasons</li>
                                        </Link>
                                    </ul>
                                }
                            </Col>
                            <Col lg={12}>
                                <h4>CAST ({this.state.cast.length})</h4>
                                <ul className={style.list}>
                                    <Persons cast={this.state.cast} />
                                </ul>
                                {this.state.cast.length > 5 &&
                                    <ul>
                                        <Link to={`/info/cast/${this.props.match.params.id}`}>
                                            <li className={style.full}> . . . see Full Cast</li>
                                        </Link>
                                    </ul>
                                }
                            </Col>
                            <Col lg={12}>
                                <h4>CREW ({this.state.crew.length})</h4>
                                <ul className={style.list}>
                                    <CrewPersons crew={this.state.crew} />
                                </ul>
                                {this.state.crew.length > 5 &&
                                    <ul>
                                        <Link to={`/info/crew/${this.props.match.params.id}`}>
                                            <li className={style.full}> . . . see Full Crew</li>
                                        </Link>
                                    </ul>
                                }
                            </Col>
                            {this.state.akas &&
                                <Col lg={12}>
                                    <h4>AKA's ({this.state.akas.length})</h4>
                                    <ul className={style.list}>
                                        <Akas akas={this.state.akas} />
                                    </ul>
                                    {this.state.akas.length > 5 &&
                                        <ul>
                                            <Link to={`/info/akas/${this.props.match.params.id}`}>
                                                <li className={style.full}> . . . see Full Aka's</li>
                                            </Link>
                                        </ul>
                                    }
                                </Col>
                            }
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