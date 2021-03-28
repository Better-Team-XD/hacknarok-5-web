import React from 'react';

class Place extends React.Component {
    constructor() {
        super();

        this.state = {
            
        }
    }

    componentDidMount() {

    }

    render() {
        console.log(this.props);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {this.props.match.params.id}
                    </div>
                </div>

            </div>

        )
    }
}
export default Place;
