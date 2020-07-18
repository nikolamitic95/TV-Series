import React from 'react';

import style from './CrewPage.module.css';

import { crewService } from '../../services/crewService';
import { Container, Row, Col } from 'react-bootstrap';
import { Header } from '../Header/Header';
import { FullCrew } from './FullCrew/FullCrew';
import { Loading } from '../Loading/Loading';

class CrewPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            crew: [],
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        crewService.getCrew(this.props.match.params.id)
            .then(data => { this.setState({ crew: data }) })
            .finally(() => this.setState({ isLoading: false }));
    }



    render() {
        return (
            <>
                <Header />
                <Container>
                    <Row>
                        <Col lg={12} md={12} sm={12}> {this.state.isLoading && <Loading />} </Col>
                        <Col lg={12}><h3 className={style.title}>Crew ({this.state.crew.length})</h3></Col>
                    </Row>
                    <Row>
                        <FullCrew crew={this.state.crew} />
                    </Row>
                </Container>
            </>
        )
    }
}

export { CrewPage }