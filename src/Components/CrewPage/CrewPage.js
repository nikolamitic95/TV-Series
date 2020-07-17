import React from 'react';

import style from './CrewPage.module.css';

import { crewService } from '../../services/crewService';
import { Container, Row, Col } from 'react-bootstrap';
import { FullCrew } from './FullCrew/FullCrew';

class CrewPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            crew: []
        }
    }

    componentDidMount() {
        crewService.getCrew(this.props.match.params.id)
            .then(data => { this.setState({ crew: data }) })
    }



    render() {
        return (
            <Container>
                <Row>
                    <Col lg={12}><h3 className={style.title}>Crew ({this.state.crew.length})</h3></Col>
                </Row>
                <Row>
                    <FullCrew crew={this.state.crew} />
                </Row>
            </Container>
        )
    }
}

export { CrewPage }