import React from 'react';

import style from './CastPage.module.css';

import { castService } from '../../services/castService';
import { Container, Row, Col } from 'react-bootstrap';
import { FullCast } from './FullCast/FullCast';

class CastPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cast: []
        }
    }

    componentDidMount() {
        castService.getCast(this.props.match.params.id)
            .then(data => { this.setState({ cast: data }) })
    }



    render() {
        return (
            <Container>
                <Row>
                    <Col lg={12}><h3 className={style.title}>Cast ({this.state.cast.length})</h3></Col>
                </Row>
                <Row>
                    <FullCast cast={this.state.cast} />
                </Row>
            </Container>
        )
    }
}

export { CastPage }