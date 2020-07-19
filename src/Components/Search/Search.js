import React from 'react';

import style from './Search.module.css';

import { searchService } from '../../services/searchService';
import { FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            results: [],
            loading: false,
        }
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

    removeValue = () => {
        this.setState({ value: '', results: [] })
    }

    render() {
        const { value } = this.state
        return (
            <>
                <FormControl className={style.form}
                    onChange={this.handleChange}
                    type="text"
                    value={value}
                    placeholder="Search"
                />
                {
                    this.state.results &&

                    <ul className={style.myUl}>
                        {this.state.results.map(res => (
                            <Link className={style.linkUl} to={`/info/${res.show.id}`}>
                                <li onClick={this.removeValue} className={style.myLi}>
                                    {res.show && res.show.image && res.show.image.medium ?
                                        <img className={style.img} src={res.show.image.medium} width='7%' />
                                        :
                                        <img className={style.img} src='../../image/no-image.jpg' width='7%' />
                                    }
                                    <p className={style.name}> {res.show.name}</p>
                                </li>
                            </Link>
                        ))}
                    </ul>
                }
            </>
        )
    }
}

export { Search }