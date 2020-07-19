import React from 'react';

import style from './Header.module.css';

import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Search } from '../Search/Search';


const Header = () => {

    return (
        <Container fluid className={style.wrapper}>
            <Navbar className={style.header} variant="dark" bg="dark" >
                <Container className={style.content}>
                    <Link className={style.linkTitle} to='/'>
                        <h1 className={style.title}><i className="fa fa-tv"></i> TV Series</h1>
                    </Link>
                    <Search />
                </Container>
            </Navbar>
        </Container>
    )
}

export { Header };