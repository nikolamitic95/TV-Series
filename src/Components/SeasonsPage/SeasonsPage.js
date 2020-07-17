import React from 'react';

import { seasonsService } from '../../services/seasonsService';

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
            <div><h1>bla</h1></div>
        )
    }
}

export { SeasonsPage }