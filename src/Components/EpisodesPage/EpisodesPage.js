import React from 'react';

import style from './EpisodesPage.module.css';

import { episodesService } from '../../services/episodeService'
import { Header } from '../Header/Header';
import { Container, Row, Col } from 'react-bootstrap';
import { Loading } from '../Loading/Loading';
import { Episodes } from './Episodes/Episodes';

class EpisodesPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            episodes: [],
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        episodesService.getEpisodes(this.props.match.params.id)
            .then(data => { this.setState({ episodes: data }) })
            .finally(() => this.setState({ isLoading: false }));
    }



    render() {
        return (
            <>
                <Header />
                <Container>
                    <Row>
                        <Col lg={12} md={12} sm={12}> {this.state.isLoading && <Loading />} </Col>
                        {this.state.episodes &&
                            <Col lg={12}><h3 className={style.title}>Episodes ({this.state.episodes.length})</h3></Col>
                        }
                    </Row>
                    <Row>
                        {this.state.episodes ?
                            <Episodes episodes={this.state.episodes} />
                            :
                            <Col className={style.img} lg={12}> <img src='../../../image/not_found.png' /></Col>
                        }
                    </Row>
                </Container>
            </>
        )
    }
}

export { EpisodesPage }