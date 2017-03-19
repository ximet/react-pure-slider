import React from 'react';
import ReactDom from 'react-dom';
import Slider from '../src/Slider.js';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{width: '70%', margin: 'auto', backgroundColor: '#CCC124'}}>
                <Slider>
                    <img src="http://placehold.it/1000x400&text=slide1"/>
                    <img src="http://placehold.it/1000x400&text=slide2"/>
                    <img src="http://placehold.it/1000x400&text=slide3"/>
                    <img src="http://placehold.it/1000x400&text=slide4"/>
                </Slider>
            </div>
        )
    }
}

const container = document.getElementById('container');

ReactDom.render(<App/>, container);
