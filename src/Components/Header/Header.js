import React from 'react';

import style from './Header.module.css';

// import { searchService } from '../../services/searchService';
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
        fetch(`http://api.tvmaze.com/search/shows?q=${value}`)
            .then(response => response.json())
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
                        <h1 className={style.title}>TV series</h1>
                        {/* <Link to='/'> <Navbar.Brand className={style.title} >TV series</Navbar.Brand> </Link> */}

                        <FormControl className={style.form}
                            onChange={this.handleChange}
                            type="text"
                            value={value}
                            placeholder="Search"
                        />
                        {this.state.results &&
                            // <ul className={style.position}>
                            //     {this.state.results.map(res => (
                            //         <li>{res.show.name}</li>
                            //     ))}
                            // </ul>
                            <div className={style.position}>
                                {this.state.results.map(res => (
                                    <Card className={style.card}>
                                        {/* <Card.Body ><img src={res.show.image.original}></img></Card.Body> */}
                                        <Card.Body className={style.name}>{res.show.name}</Card.Body>
                                    </Card>
                                ))}

                            </div>
                        }
                    </Container>
                </Navbar>
            </Container>
        )
    }
}

export { Header };