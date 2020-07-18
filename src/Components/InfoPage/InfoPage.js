import React from 'react';

import style from './InfoPage.module.css';

import { showService } from '../../services/showService';
import { seasonsService } from '../../services/seasonsService';
import { castService } from '../../services/castService';
import { crewService } from '../../services/crewService';
import { akaService } from '../../services/akaService';
import { Container, Row, Col } from 'react-bootstrap';
import { Header } from '../Header/Header';
import { Seasons } from './Seasons/Seasons';
import { Persons } from './Cast/Persons';
import { CrewPersons } from './Crew/CrewPersons';
import { Akas } from './Akas/Akas';
import { Link } from 'react-router-dom';
import { Loading } from '../Loading/Loading';


class InfoPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            singleShow: [],
            seasons: [],
            cast: [],
            crew: [],
            akas: [],
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true });
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

            .finally(() => this.setState({ isLoading: false }));
    }

    render() {
        
        return (
            <>
                <Header />
                <Container>
                    <Row>
                    <Col lg={12} md={12} sm={12}> {this.state.isLoading && <Loading />} </Col>
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
                                {this.state.seasons &&
                                    <Col lg={12}>
                                        <h4>SEASONS ({this.state.seasons.length})</h4>
                                        <ul className={style.list}>
                                            <Seasons seasons={this.state.seasons} />
                                        </ul>
                                        <ul>
                                            <Link to={`/info/seasons/${this.props.match.params.id}`}>
                                                <li className={style.full}> . . . click for season details</li>
                                            </Link>
                                        </ul>
                                    </Col>
                                }
                                {this.state.cast &&
                                    <Col lg={12}>
                                        <h4>CAST ({this.state.cast.length})</h4>
                                        <ul className={style.list}>
                                            <Persons cast={this.state.cast} />
                                        </ul>
                                        <ul>
                                            <Link to={`/info/cast/${this.props.match.params.id}`}>
                                                <li className={style.full}> . . . click for cast details</li>
                                            </Link>
                                        </ul>
                                    </Col>
                                }
                                {this.state.crew &&
                                    <Col lg={12}>
                                        <h4>CREW ({this.state.crew.length})</h4>
                                        <ul className={style.list}>
                                            <CrewPersons crew={this.state.crew} />
                                        </ul>
                                        <ul>
                                            <Link to={`/info/crew/${this.props.match.params.id}`}>
                                                <li className={style.full}> . . . click for crew details</li>
                                            </Link>
                                        </ul>
                                    </Col>
                                }
                                {this.state.akas &&
                                    <Col lg={12}>
                                        <h4>AKA's ({this.state.akas.length})</h4>
                                        <ul className={style.list}>
                                            <Akas akas={this.state.akas} />
                                        </ul>
                                        <ul>
                                            <Link to={`/info/akas/${this.props.match.params.id}`}>
                                                <li className={style.full}> . . .  click for aka's details</li>
                                            </Link>
                                        </ul>
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
            </>
        )
    }
}

export { InfoPage }