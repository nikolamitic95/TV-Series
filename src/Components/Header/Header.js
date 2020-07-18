import React from 'react';

import style from './Header.module.css';

import { searchService } from '../../services/searchService';
import { Form, Card, Navbar, FormControl, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';



class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            results: [],
            loading: false,
        };
    }

    fetchSearchResults = (value) => {
        searchService.search(value)
            .then(res => {
                this.setState({ results: res })
            })
    }

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({ value: value, loading: true }, () => {
            this.fetchSearchResults(value)
        })
    }


    render() {
        const { value } = this.state
        return (
            <Container fluid className={style.wrapper}>
                <Navbar className={style.header} variant="dark" bg="dark" >
                    <Container className={style.content}>
                        <Link className={style.linkTitle} to='/'>
                            <h1 className={style.title}><i class="fa fa-tv"></i> TV series</h1>
                        </Link>
                        <div>
                            <FormControl className={style.form}
                                onChange={this.handleChange}
                                type="text"
                                value={value}
                                placeholder="Search"
                            />
                            {this.state.results &&

                                <div className={style.position}>
                                    {this.state.results.map(res => (
                                        <Link className={style.linkSearch} to={`/info/${res.show.id}`}>
                                            <Card className={style.card}>

                                                <Card.Body className={style.body}>
                                                    
                                                    {/* <img className={style.img} src={res.show.image.original} width='5%' /> */}
                                                    <p className={style.name}> {res.show.name}</p></Card.Body>
                                            </Card>
                                        </Link>
                                    ))}

                                </div>
                            }
                        </div>
                    </Container>
                </Navbar>
            </Container>
        )
    }
}

export { Header };