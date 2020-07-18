import React from 'react';

import style from './CastPage.module.css';

import { castService } from '../../services/castService';
import { Container, Row, Col } from 'react-bootstrap';
import { Header } from '../Header/Header';
import { FullCast } from './FullCast/FullCast';
import { Loading } from '../Loading/Loading';

class CastPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cast: [],
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        castService.getCast(this.props.match.params.id)
            .then(data => { this.setState({ cast: data }) })
            .finally(() => this.setState({ isLoading: false }));
    }



    render() {
        return (
            <>
                <Header />
                <Container>
                    <Row>
                        <Col lg={12} md={12} sm={12}> {this.state.isLoading && <Loading />} </Col>
                        <Col lg={12}><h3 className={style.title}>Cast ({this.state.cast.length})</h3></Col>
                    </Row>
                    <Row>
                        <FullCast cast={this.state.cast} />
                    </Row>
                </Container>
            </>
        )
    }
}

export { CastPage }