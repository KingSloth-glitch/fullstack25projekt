import React, {Component} from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            seconds: 0
        };

        this.intervalId = null;
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState((prevState) => ({
                seconds: prevState.seconds + 1
            }));
        }, 1000);  
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <div>
                <h2>Timer: {this.state.seconds} seconds</h2>
            </div>
        );
    }
}

export default Timer;