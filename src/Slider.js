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

Slider.propTypes = {
    speed: PropTypes.number,
    transitionStart: PropTypes.func,
    transitionEnd: PropTypes.func,
    wrapperStyle: PropTypes.object,
    childStyle: PropTypes.object
}

Slider.defaultProps = {
  speed: 2000,
  transitionStart: () => {},
  transitionEnd: () => {},
  wrapperStyle: {},
  childStyle: {}
}

export default Slider;
