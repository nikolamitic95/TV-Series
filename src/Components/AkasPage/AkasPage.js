import React from 'react';

import { akaService } from '../../services/akaService';

class AkasPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            akas: []
        }
    }

    componentDidMount() {
        akaService.getAka(this.props.match.params.id)
            .then(data => { this.setState({ akas: data }) })
    }



    render() {
        return (
            <div><h1>bla</h1></div>
        )
    }
}

export { AkasPage }