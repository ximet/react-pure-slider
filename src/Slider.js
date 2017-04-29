import React from 'react';
import PropTypes from 'prop-types';

class Slider extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                { this.props.children }
            </div>
        )
    }
}

export default Slider;
