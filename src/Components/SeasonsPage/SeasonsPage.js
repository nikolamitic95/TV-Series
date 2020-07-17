import React from 'react';

import style from './SeasonsPage.module.css';

import { seasonsService } from '../../services/seasonsService';
import { Container, Row, Col } from 'react-bootstrap';
import { FullSeasons } from './FullSeasons/FullSeasons';

class SeasonsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            seasons: []
        }
    }

    componentDidMount() {
        seasonsService.getSeasons(this.props.match.params.id)
            .then(data => { this.setState({ seasons: data }) })
    }



    render() {
        return (
            <Container>
                <Row>
                    <Col lg={12}><h3 className={style.title}>SEASONS ({this.state.seasons.length})</h3></Col>
                </Row>
                <Row>
                    <FullSeasons seasons={this.state.seasons} />
                </Row>
            </Container>
        )
    }
}

export { SeasonsPage }