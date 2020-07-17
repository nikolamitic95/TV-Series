import React from 'react';

import { crewService } from '../../services/crewService';

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
            <div><h1>bla</h1></div>
        )
    }
}

export { CrewPage }