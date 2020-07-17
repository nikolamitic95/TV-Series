import React from 'react';

import { castService } from '../../services/castService';

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
            <div><h1>bla</h1></div>
        )
    }
}

export { CastPage }