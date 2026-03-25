import React from 'react';

class Timer extends React.component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0
        };
        this.intervallId = null;
    }

    componentDidMount() {
        this.intervallId = setInterval(() => {
            this.setState((prevState) => ({
                seconds: prevState.seconds + 1 
            }));
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervallId);
    }

    render() {
        return (
            <div>
                <h2>Tid: {this.state.seconds} sekunder</h2>
            </div>
        );
    }
}

export default Timer;