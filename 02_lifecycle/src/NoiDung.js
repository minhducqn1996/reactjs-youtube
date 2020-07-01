import React from 'react';

class NoiDung extends React.Component {
    componentWillReceiveProps(nextProps, nextState) {
        console.log('componentWillReceiveProps cua NoiDung.js :' + nextProps.ten);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate cua NoiDung.js');
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('componetWillUpdate cua NoiDung.js');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componetDidUpdate cua NoiDung.js');
    }
    render() {
        console.log('Render cua NoiDung.js');
        
        return (
            <div>
                <h4> {this.props.ten} </h4>
            </div>
        );
    }
}

export default NoiDung;